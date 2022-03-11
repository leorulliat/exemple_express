const express = require('express')
const router = express.Router()

var base = require("../data.js")

router.get('/:id', (req, res) => {
    var id = req.params.id;
    if(id != undefined && id != ''){
        var obj = base.products.find(item => item.id == id);
        if(obj != undefined)
            res.status(200).json(obj)
        else
            res.status(400).json({message:'produit introuvable'})
    }else{
        res.status(400).json({message:'passez un id'})
    }
})


module.exports = router