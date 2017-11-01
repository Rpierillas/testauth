const User = require('mongoose');

module.exports = (req, res, next) => {
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    };

  //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/profile');
      }
    });
  }
};
