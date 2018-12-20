const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const router = express.Router();

// Register a new user
router.post('/register', (req, res) => {
  console.log(req.body)
  User.register(new User({ email: req.body.email, role: 'user' }), req.body.password, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    // Log the new user in (Passport will create a session) using the local strategy
    passport.authenticate('local')(req, res, () => {
      // req.user exists at this point.
      // so we need to store it in the session for the ACL to access
      req.session.role = req.user.role || 'guest'
      // Normally we wouldn't send back the entire user object - this is for learning purposes.
      // Instead, we might send back only the username or email, or even just a status code as below.
      // res.json(req.user)
      res.sendStatus(200)
    });
  });
});

// Login an existing user
router.post('/login', passport.authenticate('local'), (req, res) => {
  // At this point, authentication was successful and req.user exists.
  // so we need to store it in the session for the ACL to access
  req.session.role = req.user.role || 'guest'
  // Normally we wouldn't send back the entire user object - this is for learning purposes.
  // Instead, we might send back only the username or email, or even just a status code as below.
  // res.json(req.user)
  res.sendStatus(200)
});

// Logout the current user
router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200)
});

router.get('/dashboard', function (req, res, next) {
  res.json(req.user)
});

 router.get('/foo', function (req, res, next) {
  res.send('<h3>Anyone with "user" role can get here, but guests cannot!</h3>')
});

module.exports = router;