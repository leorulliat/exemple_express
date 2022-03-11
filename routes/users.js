const express = require('express')
const router = express.Router()

var base = require("../data.js")

router.get('/:fname/:lname', (req, res) => {
    var fname = req.params.fname;
    var lname = req.params.lname;
    if(fname != undefined && fname != '' && lname != undefined && lname != ''){
        var obj = base.users.find(item => (item.fname.toLocaleLowerCase() == fname.toLocaleLowerCase() && item.lname.toLocaleLowerCase() == lname.toLocaleLowerCase()));
        if(obj != undefined)
            res.status(200).json(obj)
        else
            res.status(400).json({message:`utilisateur '${fname} ${lname}' introuvable`})
    }else{
        res.status(400).json({message:'passez les noms bordel'})
    }
})

router.get('/', (req, res) => {
    var tabUsers = [];
    base.users.forEach(user => {
        tabUsers.push(user.email) 
    })
    res.status(200).json(tabUsers)
})

router.get('/help', (req, res) => {
    res.json({
        current: '/users',
        routes: [
            '/',
            '/fisrtName/lastName'
        ]
    })
})

module.exports = router