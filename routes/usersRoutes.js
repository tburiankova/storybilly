const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const usersController = require('../controllers/usersController');
const fileUpload = require('../middlewares/fileUpload');

router.route('/').get(usersController.getUsers);

router
  .route('/signup')
  .post(
    fileUpload.single('image'),
    [
      check('name').not().isEmpty(),
      check('email').normalizeEmail().isEmail(),
      check('password').isLength({ min: 6 }),
    ],
    usersController.signUp
  );

router.route('/login').post(usersController.logIn);

module.exports = router;
