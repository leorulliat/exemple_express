const express = require("express");
const res = require("express/lib/response");
const app = express();

const PORT = 4000;

const routerUser = require('./routes/users')
const routerProducts = require('./routes/products')

app.get('/', (req,res) => { res.redirect('/help') })

app.get('/help', (req,res) => {
    res.json({routes: [
        '/users',
        '/products'
        ],
        message : 'You can use /help in any routes'
    })
})

app.use('/users',routerUser)
app.use('/products',routerProducts)

app.listen(PORT, () => { console.log(`Server started on port : ${PORT}`) })