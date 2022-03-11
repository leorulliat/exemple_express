const express = require('express')
const router = express.Router()

// var maBase = require("../data.js");

//récupération du tableau des products dans la "base"
var products = require("../data.js").products

router.get('/', (req,res) => { res.redirect('/products/help') })

router.get('/help', (req, res) => {
    res.status(202).json({
        current: '/products',
        routes: [
            'GET /list',
            'GET /*idProduct*'
        ]
    })
})

// renvois la liste de tous les id de produits
router.get('/list', (req, res) => {
    var tabIdProduct = [];
    products.forEach(item => {
        tabIdProduct.push(item.id);
    })
    res.status(200).json(tabIdProduct)
})

// renvois les infos du produit en question
router.get('/:id', (req, res) => {
    var id = req.params.id;
    if(id != undefined && id != ''){
        var product = products.find(item => item.id == id);
        if(product != undefined)
            res.status(200).json(product)
        else
            res.status(400).json({message:'Produit avec id = \''+id+'\' introuvable'})
    }else{
        res.status(400).json({message:'passez un id'})
    }
})


// on exporte l'objet router sous forme de module pour pouvoir l'intégrer à l'objet "app" dans app.js (ligne 16 à 18) 
module.exports = router