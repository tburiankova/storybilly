const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const usersController = require('../controllers/usersController');

router.route('/').get(usersController.getUsers);

router
  .route('/signup')
  .post(
    [
      check('name').not().isEmpty(),
      check('email').normalizeEmail().isEmail(),
      check('password').isLength({ min: 6 }),
    ],
    usersController.signUp
  );

router.route('/login').post(usersController.logIn);

module.exports = router;
