const jwt = require('jsonwebtoken');

const HttpError = require('../models/httpError');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error('Authentication failed');
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    console.log(err);
    return next(new HttpError('Authentication failed', 403));
  }
};
