var express = require('express');
var router = express.Router();
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.post('/signup', (req, res) => {
  const hash = bcrypt.hashSync(req.body.password,10)

	if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  // Check if the user has not already been registered
  User.findOne({ username: req.body.username }).then(data => {
    if (data === null) {
      const newUser = new User({
        username: req.body.username,
        password: hash,
        token: uid2(32),
        canBookmark: true,
      });

      newUser.save().then(() => {
        res.json({ result: true, token: newUser.token });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
  });
});

router.post('/signin', (req, res) => {
  const token = uid2(32);
  console.log(req.body)
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
     // console.log(bcrypt.compareSync(req.body.password, user.password));
    if (bcrypt.compareSync(req.body.password, user.password)) {
      
      res.json({ result: true, token: user.token });
    } else {
      res.json({ result: false, error: 'User not found' });
    }}
  });
});

router.get('/canBookmark/:token', (req, res) => {
  const token = req.params.token;
  User.findOne({ token }).then(user => {
    if (!user) {
     // console.log(user)
      // si l'utilisateur n'existe pas avec le token fourni
      return res.json ({ result: false, error : 'User not found'});
      
    }
    res.json({ result: true, canBookmark: user.canBookmark});

  });
});
 


module.exports = router;
