const Post = require('../models/post');

exports.getPosts = async (req, res) => {
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

exports.createPost = async (req, res) => {
  const { title, content, image, author } = req.body;
  try {
    console.log(req.body);
    const newPost = await Post.create({ title, content, image, author });
    res.status(201).json({ status: 'success', data: { post: newPost } });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later...',
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postToDelete = await Post.findByIdAndDelete(req.params.id);
    if (!postToDelete) {
      return res
        .status(404)
        .json({ status: 'error', message: 'Post not found!' });
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
