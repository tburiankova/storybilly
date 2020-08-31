const fs = require('fs');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Post = require('../models/post');
const User = require('../models/user');
const HttpError = require('../models/httpError');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate({
        path: 'author',
        model: 'User',
      })
      .sort({ createdAt: 'desc' });
    res.status(200).json({
      results: posts.length,
      posts,
    });
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later...')
    );
  }
};

exports.getPostsByUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const posts = await Post.find({ author: userId });

    if (!posts || posts.length === 0) {
      return next(new HttpError('Could not find any posts for this user', 404));
    }

    res.status(200).json({
      results: posts.length,
      posts,
    });
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later...', 500)
    );
  }
};

exports.getPost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);

    if (!post) {
      return next(new Error('Could not find this post', 404));
    }

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }
};

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError('Some of the inputs are invalid, please check your data')
    );
  }

  const { title, content } = req.body;
  const author = req.userData.userId;

  const newPost = new Post({
    title,
    content,
    image: req.file ? req.file.path : null,
    author,
  });

  let user;

  try {
    user = await User.findById(author);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  if (!user) {
    return next(
      new HttpError('Could not find the user, please try again', 404)
    );
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newPost.save({ session });
    user.posts.push(newPost);
    await user.save({ session });
    await session.commitTransaction();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  res
    .status(201)
    .json({ message: 'Post successfully created', post: newPost, user });
};

exports.updatePost = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError('Some of the inputs are invalid, please check your data')
    );
  }

  const { title, content } = req.body;
  const postId = req.params.id;
  let post;
  try {
    post = await Post.findById(postId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  if (!post) {
    return next(new HttpError('Post not found', 404));
  }

  if (post.author != req.userData.userId) {
    return next(new HttpError('Updating this post was denied', 401));
  }

  post.title = title;
  post.content = content;
  post.image = req.file ? req.file.path : post.image;

  try {
    await post.save();
    res.status(200).json({ message: 'Post successfully updated', post });
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.id;
  let post;
  try {
    post = await Post.findById(postId).populate('author');
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  if (!post) {
    return next(new HttpError('Post not found', 404));
  }

  if (post.author._id != req.userData.userId) {
    return next(new HttpError('Deleting this post was denied', 401));
  }

  const imagePath = post.image;

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await post.remove({ session });
    post.author.posts.pull(post);
    await post.author.save({ session });
    await session.commitTransaction();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  if (post.image) {
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });
  }

  res.json({
    message: 'Post successfully deleted',
    post: {
      _id: post._id,
      author: post.author._id,
    },
  });
};
