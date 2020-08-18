const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const postsController = require('../controllers/postsController');

router
  .route('/')
  .get(postsController.getPosts)
  .post(
    [check('title').not().isEmpty(), check('content').isLength({ min: 10 })],
    postsController.createPost
  );

router
  .route('/:id')
  .get(postsController.getPost)
  .patch(
    [check('title').not().isEmpty(), check('content').isLength({ min: 10 })],
    postsController.updatePost
  )
  .delete(postsController.deletePost);
router.route('/user/:id').get(postsController.getPostsByUser);

module.exports = router;
