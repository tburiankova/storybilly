const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const postsController = require('../controllers/postsController');
const fileUpload = require('../middlewares/fileUpload');
const checkAuth = require('../middlewares/checkAuth');

router
  .route('/')
  .get(postsController.getPosts)
  .post(
    checkAuth,
    fileUpload.single('image'),
    [check('title').not().isEmpty(), check('content').isLength({ min: 10 })],
    postsController.createPost
  );

router.route('/last').get(postsController.getLast);

router
  .route('/:id')
  .get(postsController.getPost)
  .patch(
    checkAuth,
    fileUpload.single('image'),
    [check('title').not().isEmpty(), check('content').isLength({ min: 10 })],
    postsController.updatePost
  )
  .delete(checkAuth, postsController.deletePost);
router.route('/user/:id').get(postsController.getPostsByUser);

module.exports = router;
