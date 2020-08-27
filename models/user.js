const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  image: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Post',
    },
  ],
  following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
