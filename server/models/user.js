const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/*
 * Schema
 */
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true },
  },
  username: {
    type: String,
    index: { unique: true },
  },
  password: String,
});
// authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err);
      } else if (!user) {
        const err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      });
    });
};

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});


module.exports = mongoose.model('User', UserSchema);