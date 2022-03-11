const express = require('express')
const router = express.Router()

router.use(express.json()) //essentiel pour pouvoir récupérer les infos du body pour le POST
// signifie aussi que pour la requete (sur postman par exemple), le request body doit etre de type 'JSON', et non 'Multipart form data' ou autre

var base = require("../data.js")

router.get('/', (req,res) => { res.redirect('/auth/help') })

router.get('/help', (req,res) => {
    res.status(202).json({routes: [
        'GET /login/help',
        'POST /login'
        ]
    })
})

router.get('/login', (req,res) => { res.redirect('/auth/login/help') })

router.get('/login/help', (req,res) => {
    res.status(202).json({ message : "Authentification via Email ('email') et mot de passe ('pwd')",})
})

// POST pour login
router.post('/login', (req, res) => {
    var email = req.body.email; // récupération des email et mdp passés dans body cette fois (methode POST)
    var pwd = req.body.pwd;
    var user = base.users.find(user => (user.email == email));  //on cherche le user via email
    if( user == undefined ){
        res.status(400).json({ error : 'Utilisateur introuvable'})
    }else{
        if( base.users.find(user => (user.email == email && user.pwd == pwd)) == undefined ){   // si le user existe on check email et mdp pour voir si ça correspond (si ça correspond pas, le find() retourne un undefined)
            res.status(401).json({ error : 'Mot de passe erroné.'})
        }else{
            res.status(200).send({message: `Utilisateur : '${user.fname} ${user.lname}' connecté!`})
        }
    }
    
})

// on exporte l'objet router sous forme de module pour pouvoir l'intégrer à l'objet "app" dans app.js (ligne 16 à 18) 
module.exports = router