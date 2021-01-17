//Comment créer un serveur sécurisé avec websocket en 4 lignes: 
var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'); // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)


// Chargement de la page index.html
app.get('/', function (req, res) {
  //Attention, on n'utilise pas render ici donc pas de dossier views
  res.sendFile(__dirname + '/htmlchat.html');
});

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
     
    //Transmission d'un message du chat    
    socket.on('message', function (message) {
        message=ent.encode(message); 
        socket.broadcast.emit('message',{pseudo: socket.pseudo, message : message});    
    });
   
    //Stockage du pseudo dans une variable pseudo (pseudo-cookie mais éviter de faire comme ça en vrai) 
    socket.on('nouveau_user_chat', function(pseudo){
        //Ajout d'une sécu pour éviter de balancer du code dans le pseudo
        pseudo=ent.encode(pseudo);
        //Il y a un objet socket en mémoire sur le serveur pour le chaque client
        socket.pseudo = pseudo;    
        //pas besoin de prévenir l'utilisateur lorsqu'il se connecte dans le chat (juste utile aux autres)
        socket.broadcast.emit('entree_chat',socket.pseudo);
    });	
});


server.listen(8080);

