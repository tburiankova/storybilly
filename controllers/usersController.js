const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find({}, '-password');
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  res.json({ users });
};

exports.signUp = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        'Some of the inputs are invalid, please check your data',
        422
      )
    );
  }

  const { name, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(
      new HttpError('Signing up failed, please try again later', 500)
    );
  }

  if (existingUser) {
    return next(new HttpError('User with such email already exists', 422));
  }

  const newUser = new User({
    name,
    email,
    image: req.file ? req.file.path : null,
    password,
    posts: [],
  });

  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
    return next(
      new HttpError('Signing up failed, please try again later', 500)
    );
  }

  res.status(201).json({
    message: 'Welcome! Your account has been created!',
    user: newUser,
  });
};

exports.logIn = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(
      new HttpError('Logging in failed, please try again later', 500)
    );
  }

  if (!existingUser || existingUser.password !== password) {
    return next(
      new HttpError('Logging in failed, please check your credentials', 401)
    );
  }

  res.json({ message: 'Logged in successfully', user: existingUser });
};
