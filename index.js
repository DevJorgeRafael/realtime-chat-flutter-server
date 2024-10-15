import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketController } from './sockets/socket.js';

// App de Express
const app = express();

// Creando servidor HTTP
const server = createServer(app);
const io = new Server(server); // Inicializa io

// Obtener __dirname equivalente en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Llama al controlador de sockets y pásale la instancia de io
socketController(io);

// Servidor escuchando
const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', PORT);
});
