const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const postsController = require('../controllers/postsController');
const fileUpload = require('../middlewares/fileUpload');

router
  .route('/')
  .get(postsController.getPosts)
  .post(
    fileUpload.single('image'),
    [check('title').not().isEmpty(), check('content').isLength({ min: 10 })],
    postsController.createPost
  );

router
  .route('/:id')
  .get(postsController.getPost)
  .patch(
    fileUpload.single('image'),
    [check('title').not().isEmpty(), check('content').isLength({ min: 10 })],
    postsController.updatePost
  )
  .delete(postsController.deletePost);
router.route('/user/:id').get(postsController.getPostsByUser);

module.exports = router;
