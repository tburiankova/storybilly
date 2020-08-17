const Post = require('../models/post');
const HttpError = require('../models/httpError');

exports.getPosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Post.find();
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later...',
    });
  }
};

exports.getPostsByUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const posts = await Post.find({ author: userId });

    if (posts.length === 0) {
      return next(new HttpError('Could not find any posts for this user', 404));
    }

    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: posts,
    });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

exports.createPost = async (req, res, next) => {
  const { title, content, image, author } = req.body;
  try {
    const newPost = await Post.create({ title, content, image, author });
    res.status(201).json({ status: 'success', post: newPost });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later...',
    });
  }
};

exports.updatePost = async (req, res, next) => {
  const { title, content, image, author } = req.body;
  const postId = req.params.id;
  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, {
      title,
      content,
      image,
      author,
    });
    res.status(200).json({
      status: 'success',
      data: updatedPost,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const postToDelete = await Post.findByIdAndDelete(req.params.id);
    if (!postToDelete) {
      return next(new HttpError('Post not found', 404));
    }
    res.status(200).json({
      status: 'success',
      message: 'Post has been successfully deleted!',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later...',
    });
  }
};
