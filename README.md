# Exemple API

- Installer les dépendences commande : **"npm install"**
- Démarrer le serveur en mode dev : **"npm run dev"** *=> (execute le script "dev" présent dans le fichier package.json)*
- Accéder à l'API : via *Postman*, ou une extension *REST client* (très simple d'utilisation), ou encore tout simplement juste dans un navigateur (uniquement pour faire des GET)
- url point d'entrée : **http://localhost:4000**

## Description

- Simple API en expressJS, permettant d'accéder à une "base"  (aucune interface pour une API classique)
- Pas de base SQL ou MongoDB, simplement un fichier data.js qui exporte un module avec un simple json dedans qui sert de "base"
- exemple d'un POST avec login **sans aucune** protection (donc pas à reproduire)
- découpage des routes en plusieurs fichier pour avec un code plus propre que si tout etait dans le fichier app.js

------------------

### package.json

le "parametrage" de l'app (ici api), dedans on retrouve les infos du projets, le ficheir point d'entrée **app.js**, les dépendences/dépendancesDev, **express** et **nodemon** pour la phase de développement uniquement. 