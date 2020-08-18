const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Post = require('../models/post');
const User = require('../models/user');
const HttpError = require('../models/httpError');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
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

  const { title, content, image, author } = req.body;

  const newPost = new Post({ title, content, image, author });

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

  res.status(201).json({ message: 'Post successfully created', post: newPost });
};

exports.updatePost = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError('Some of the inputs are invalid, please check your data')
    );
  }

  const { title, content, image, author } = req.body;
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

  post.title = title;
  post.content = content;
  post.image = image;

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
  try {
    const postToDelete = await Post.findByIdAndDelete(req.params.id);
    if (!postToDelete) {
      return next(new HttpError('Post not found', 404));
    }
    res.status(200).json({
      message: 'Post successfully deleted',
    });
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }
};
