const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

router
  .route('/')
  .get(postsController.getPosts)
  .post(postsController.createPost);
router
  .route('/:id')
  .get(postsController.getPost)
  .patch(postsController.updatePost)
  .delete(postsController.deletePost);
router.route('/user/:id').get(postsController.getPostsByUser);

module.exports = router;
