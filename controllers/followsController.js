const mongoose = require('mongoose');
const HttpError = require('../models/httpError');
const User = require('../models/user');

exports.follow = async (req, res, next) => {
  let userToFollow;
  let userUnFollowing;
  try {
    userToFollow = await User.findById(req.params.id);
    if (!userToFollow) {
      return next(new HttpError('User not found'), 404);
    }
  } catch (err) {
    return next(new HttpError('Could not find user', 500));
  }

  try {
    userUnFollowing = await User.findById(req.userData.userId);

    if (!userUnFollowing) {
      return next(new HttpError('User not found'), 404);
    }
  } catch (err) {
    return next(new HttpError('User not found', 404));
  }

  if (userToFollow.followers.includes(req.userData.userId)) {
    return next(new HttpError('You are already following this user', 400));
  }

  if (userToFollow._id.toString() == userUnFollowing._id.toString()) {
    return next(new HttpError('You cannot follow yourself', 400));
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    await userToFollow.updateOne(
      { $push: { followers: userUnFollowing } },
      { session }
    );
    await userUnFollowing.updateOne(
      { $push: { following: userToFollow } },
      { session }
    );

    await session.commitTransaction();
  } catch (err) {
    return next(
      new HttpError('Could not follow this user, please try again later', 500)
    );
  }

  res.json({ message: 'You are now following ' + userToFollow.name });
};

exports.unfollow = async (req, res, next) => {
  let userToUnFollow;
  let userUnFollowing;
  try {
    userToUnFollow = await User.findById(req.params.id);
    if (!userToUnFollow) {
      return next(new HttpError('User not found'), 404);
    }
  } catch (err) {
    return next(new HttpError('Could not find user', 500));
  }

  try {
    userUnFollowing = await User.findById(req.userData.userId);

    if (!userUnFollowing) {
      return next(new HttpError('User not found'), 404);
    }
  } catch (err) {
    return next(new HttpError('User not found', 404));
  }

  if (!userToUnFollow.followers.includes(req.userData.userId)) {
    return next(new HttpError('You are not following this user', 400));
  }

  if (userToUnFollow._id.toString() == userUnFollowing._id.toString()) {
    return next(new HttpError('You cannot unfollow yourself', 400));
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    await userToUnFollow.updateOne(
      { $pull: { followers: userUnFollowing._id } },
      { session }
    );
    await userUnFollowing.updateOne(
      { $pull: { following: userToUnFollow._id } },
      { session }
    );

    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return next(
      new HttpError('Could not unfollow this user, please try again later', 500)
    );
  }

  res.json({ message: 'You are no longer following ' + userToUnFollow.name });
};
