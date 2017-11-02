const express = require('express');
const User = require('../models/user');

const router = express.Router();
//GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join('/public/index.html'));
});

//POST route for updating data
router.post('/', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    const err = new Error('Vos mots de passe ne sont pas identiques');
    err.status = 400;
    res.send('Les mots de passes ne correspondent pas');
    return next(err);
  }

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

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      }
      else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });

  }
  else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        const err = new Error('Identifiants incorrects.');
        err.status = 401;
        return next(err);
      }
      else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  }
  else {
    const err = new Error('Veuillez remplir tout les champs ! ');
    err.status = 400;
    return next(err);
  }
});

// GET route after registering
router.get('/profile', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      }
      else {
        if (user === null) {
          const err = new Error("Vous avez dépassé le périmètre de sécurité. Revenez d'où vous venez sous peine de... EXTERMINATE !! EXTERMINATE !!");
          err.status = 400;
          return next(err);
        }
        else {
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>');
        }
      }
    });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
      else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
