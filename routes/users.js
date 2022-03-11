const express = require('express')
const router = express.Router()

// var maBase = require("../data.js");

//récupération du tableau des users dans la "base"
var users = require("../data.js").users;

router.get('/help', (req, res) => {
    res.status(202).json({
        current: '/users',
        routes: [
            'GET /',
            'GET /*fisrtName*/*lastName*',
            'GET /getUser?prenom=*fisrtName*&nom=*lastName*'
        ]
    })
})

// récupération des données d'un user en passant nom et prenom dans l'url (ex : "http://localhot:4000/users/leo/rulliat")
router.get('/:fname/:lname', (req, res) => {
    var fname = req.params.fname;   // params dans l'url
    var lname = req.params.lname;
    if(fname != undefined && fname != '' && lname != undefined && lname != ''){
        var user = users.find(item => (item.fname.toLocaleLowerCase() == fname.toLocaleLowerCase() && item.lname.toLocaleLowerCase() == lname.toLocaleLowerCase()));
        if(user != undefined){
            res.status(200).json({
                email: user.email,
                name: user.fname+' '+user.lname,
                birthday: user.bday
            })
        }else{
            res.status(400).json({message:`utilisateur '${fname} ${lname}' introuvable`})
        }
    }else{
        res.status(400).json({message:'passez les noms bordel'})
    }
})

// deuxième façon moins adaptée pour express (ex : "http://localhot:4000/users/getUser?prenom=leo&nom=rulliat")
router.get('/getUser', (req, res) => {
    var fname = req.query.prenom;   // params dans l'url
    var lname = req.query.nom;
    //redirection pour faire exactement le meme traitement
    res.redirect(`/users/${fname}/${lname}`);
})

//retourne la liste de tous les users (ex : "http://localhot:4000/users/")
router.get('/', (req, res) => {
    var tabUsers = [];
    users.forEach(user => {
        tabUsers.push(user.email) 
    })
    res.status(200).json(tabUsers)
})

// on exporte l'objet router sous forme de module pour pouvoir l'intégrer à l'objet "app" dans app.js (ligne 16 à 18) 
module.exports = router