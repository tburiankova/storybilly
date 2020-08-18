const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Jane',
    email: 'jane@test.com',
    password: 'test1234',
  },
  {
    id: 'u2',
    name: 'John',
    email: 'john@test.com',
    password: 'test1234',
  },
];

exports.getUsers = (req, res, next) => {
  res.status(200).json({ users: DUMMY_USERS });
};

exports.signUp = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError('Some of the inputs are invalid, please check your data')
    );
  }

  const { name, email, password } = req.body;

  const existingUser = DUMMY_USERS.find((user) => user.email === email);

  if (existingUser) {
    return next(new HttpError('User with such email already exists', 422));
  }

  const newUser = {
    id: Math.random() * 100000000000000000,
    name,
    email,
    password,
  };

  DUMMY_USERS.push(newUser);

  res.status(201).json(newUser);
};

exports.logIn = (req, res, next) => {
  const { email, password } = req.body;
  const existingUser = DUMMY_USERS.find((user) => user.email === email);

  if (!existingUser) {
    return next(new HttpError('Could not find user', 401));
  }

  if (existingUser.password === password) {
    res.json({ message: 'Logged in successfully' });
  } else {
    return next(new HttpError('Incorrect password', 401));
  }
};
