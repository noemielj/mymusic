var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');
const { checkBody } = require("../modules/checkBody")

const OWM_API_KEY = "ce7418650c86eae6629dfcfdda141c14";

// inscrire un utilisateur 
router.post("/signup", async (req, res) => {
    

    if (!checkBody(req.body, ["name", "email", "password"])) {
        res.json({ result: false, error: "Missing or empty fields" }); 
        return; 
    }

    User.findOne({ email: req.body.email }).then(data => {
        if (data === null) {
            const newUser = new User ({
                name: req.body.name,
	            email: req.body.email,
	            password: req.body.password,
            });

            newUser.save().then(() => {
                res.json({ result: true })
            })
        } else {
            res.json({ result: false, error: "User already exists"  })
        }
    })
});

// verifier la connexion d'un utilisateur
router.post("/signin", async (req,res) => {
// vérification email
if (!checkBody(req.body, ["email", "password" ])) {
        res.json({ result: false, error: "Missing or empty fields"})
        return;
    }

    User.findOne({ email: req.body.email, password: req.body.password }).then(data => {
        if (data) {
            res.json({ result : true })
        } else {
            res.json({result: false, error: "User not found"})
        }
    })
})

module.exports = router;