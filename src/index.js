import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketController } from './sockets/socket.js';
import { router as authRoutes } from './routes/auth.js';
import { router as usersRoutes } from './routes/usuarios.js';

dotenv.config()

// DB Config
import { dbConnection } from './database/config.js';
dbConnection();

// App de Express
const app = express();
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes)
app.use('/api/usuarios', usersRoutes)


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
