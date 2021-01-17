# TP du super Chat, du cours en ligne OpenClassrooms

TP du "super Chat", réalisé dans le cadre de la formation sur Node.js proposée par le
site OpenClassrooms, à l'adresse suivante: https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1057959-tp-le-super-chat

Ce TP consiste à réaliser un chat dans le navigateur Web. A l'affichage de la page,
une fenêtre d'alerte demande le pseudonyme de l'utilisateur. Après l'avoir renseigné,
l'utilisateur peut envoyer des messages dans le chat, qui seront alors visibles par un autre
utilisateur qui utilise le même chat dans un autre onglet. L'arrivée d'un utilisateur
dans le chat est signalée aux autres utilisateurs du chat. Les messages sont envoyés d'un onglet
à l'autre via la WebSocket socket.io.

Une fois cloné, ce projet peut être exécuté en entrant les commandes suivantes à la racine:
```
npm install express
npm install socket.io
npm install
node chat.js
```

Le résultat est alors accessible dans le navigateur, à l'adresse http://localhost:8080/
