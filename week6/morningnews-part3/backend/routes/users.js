var express = require('express');
var router = express.Router();

const User = require('../models/users');


// création d’un nouvel utilisateur dans la collection users
router.post('/signup', (req,res) => {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username && !password) {
        return res.json({result : false, error : "Veillez remplir tous les champs"})
        
        }

    // Vérification si l'utilisateur existe déjà
    User.findOne({ username: req.body.username, password: req.body.password }).then(data => {
        if (data === null ) {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
              });
              newUser.save().then((user) => {
                res.json({ result: true, user })
        })
    } else {
        res.json({ result: false, error: "User already exists"  })
    }
})
});


// vérification du username et password d’un utilisateur
router.post('/signin', (req,res) => {
    const { username, password } = req.body;
    if (!username && !password) {
        res.json({ result: false, error: "Champs manquants"})
        return;
    }

    User.findOne({ username: req.body.username, password: req.body.password }).then(data => {
        if (data) {
            res.json({ result : true })
        } else {
            res.json({result: false, error: "User not found"})
        }
    })

})

module.exports = router;