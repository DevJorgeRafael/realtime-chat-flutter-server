import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import './sockets/socket.js'

// App de Express
const app = express();

// Creando servidor HTTP
const server = createServer(app);
export const io = new Server(server);


// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Servidor escuchando
const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Ser running on ${PORT}`);
})


