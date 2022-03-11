const express = require('express')
const router = express.Router()

router.use(express.json())

var base = require("../data.js")

router.post('/login', (req, res) => {
    var email = req.body.email;
    var pwd = req.body.pwd;
    var user = base.users.find(user => (user.email == email));
    if( user == undefined ){
        res.status(400).json({ error : 'Utilisateur introuvable'})
    }else{
        if( base.users.find(user => (user.email == email && user.pwd == pwd)) != undefined ){
            res.status(200).send({message: `Utilisateur : '${user.fname} ${user.lname}' connecté!`})
        }else{
            res.status(401).json({ error : 'Mot de passe erroné.'})
        }
    }
    
})

module.exports = router