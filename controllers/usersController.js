const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const HttpError = require('../models/httpError');
const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.aggregate([
      { $addFields: { followersCount: { $size: '$followers' } } },
      { $sort: { followersCount: -1 } },
    ]);

    // users = await User.find({}, '-password').sort({
    //   followersCount: 'desc',
    // });
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

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(
      new HttpError('Signing up failed, please try again later', 500)
    );
  }

  const newUser = new User({
    name,
    email,
    image: req.file ? req.file.path : null,
    password: hashedPassword,
    posts: [],
  });

  try {
    await newUser.save();
  } catch (err) {
    return next(
      new HttpError('Signing up failed, please try again later', 500)
    );
  }

  let token;

  try {
    token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    );
  } catch (err) {
    return next(
      new HttpError('Signing up failed, please try again later', 500)
    );
  }

  res.status(201).json({
    message: 'Welcome! Your account has been created!',
    user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      image: newUser.image,
      following: newUser.following,
      followers: newUser.followers,
      token,
    },
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

  if (!existingUser) {
    return next(
      new HttpError('Logging in failed, please check your credentials', 403)
    );
  }

  let passwordIsValid;

  try {
    passwordIsValid = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  if (!passwordIsValid) {
    return next(
      new HttpError('Logging in failed, please check your credentials', 401)
    );
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    );
  } catch (err) {
    return next(
      new HttpError('Signing up failed, please try again later', 500)
    );
  }

  res.json({
    message: 'Logged in successfully',
    user: {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      image: existingUser.image,
      following: existingUser.following,
      followers: existingUser.followers,
      token,
    },
  });
};

exports.getUser = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, please try again later', 500)
    );
  }

  res.json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      following: user.following,
      followers: user.followers,
    },
  });
};
