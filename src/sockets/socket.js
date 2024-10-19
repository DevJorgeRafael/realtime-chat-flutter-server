import { comprobarJWT } from "../helpers/jwt.js";
import { usuarioConectado, usuarioDesconectado } from "../controllers/socket.js";

export const socketController = (io) => {
    // Mensajes de Sockets
    io.on('connection', async (client) => {
        console.log('Cliente conectado');

        const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);
        
        if( !valido ) {
            return client.disconnect();
        }

        // Cliente autenticado
        await usuarioConectado( uid );

        client.on('disconnect', () => {
            usuarioDesconectado( uid ); 
        });

        // Puedes descomentar esto para probar el envío y recepción de mensajes
        // client.on('mensaje', (payload) => {
        //     console.log('Mensaje recibido', payload);
        //     io.emit('mensaje', { admin: 'Nuevo mensaje desde el servidor' });
        // });
    });
};
