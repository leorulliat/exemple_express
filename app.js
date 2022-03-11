const express = require("express");
const app = express();  // serveur

const PORT = 4000;

/**
 * ROUTES 
 * récupération des sources pour les différentes routes
 * une route étant une "extension d'url" exemple "/users" -> "http://localhost:4000/user"
 */
const routerUser = require('./routes/users')    
const routerProducts = require('./routes/products')
const routerAuth = require('./routes/auth')

// référencement des routes
app.use('/users',routerUser)
app.use('/products',routerProducts)
app.use('/auth',routerAuth)

// redirection http://localhost:4000/  ->  http://localhost:4000/help 
app.get('/', (req,res) => { res.redirect('/help') })

// aide accueil
app.get('/help', (req,res) => {
    res.status(202).json({routes: [
        'GET /users',
        'GET /products',
        'GET /auth'
        ],
        message : 'You can use /help in any routes'
    })
})

// mise du serveur en écoute sur le port 4000, afin d'attendre les requetes pour y répondre
app.listen(PORT, () => { console.log(`Server started on port : ${PORT}`) })