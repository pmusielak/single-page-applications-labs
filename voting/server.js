const WebSocket = require('ws');
const express = require('express');
const http = require('http');


let results = {
    pizza: 0,
    pasta: 0
};

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server: server, path: "/voting" });
app.use(express.static('client'));
server.listen(3000);

const clients = new Set();


wsServer.on('connection', (socket) => {

    console.log('Client connected!');
    clients.add(socket);
    socket.on('message', (message) => {
        if(message == 'Pizza'){
            results.pizza += 1;
        }
        else if(message == 'Pasta'){
            results.pasta += 1;
        }
        console.log('Message received: ' + message);

        wsServer.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify(results));
                console.log('Sending to a client from clients.');
            }
        });
    });
    socket.on('error', (error) => {
        console.log('Error:' + error);
    });
    
    socket.send(JSON.stringify(results));
    // send current results to a newly connected client
    console.log('Sending to a newly connected client.');
    socket.on('close', () => {
        clients.delete(socket);
        console.log('Client disconnected, total number of clients is: ',
        clients.size);
       });
       
});