const express = require('express')
const router = express.Router()

var products = require("../data.js").products

router.get('/:id', (req, res) => {
    var id = req.params.id;
    if(id != undefined && id != ''){
        var product = products.find(item => item.id == id);
        if(product != undefined)
            res.status(200).json(product)
        else
            res.status(400).json({message:'produit introuvable'})
    }else{
        res.status(400).json({message:'passez un id'})
    }
})


module.exports = router