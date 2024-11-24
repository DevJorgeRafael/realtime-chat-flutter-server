import { comprobarJWT } from "../helpers/jwt.js";
import { grabarMensaje, usuarioConectado, usuarioDesconectado } from "../controllers/socket.js";

export const socketController = (io) => {
    // Mensajes de Sockets
    io.on('connection', async (client) => {
        console.log('Cliente conectado', client.id);

        const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);
        
        if( !valido ) {
            return client.disconnect();
        }

        // Cliente autenticado
        await usuarioConectado( uid );

        // Ingresar al usuario a una sala en particular
        client.join( uid );

        // Escuchar del cliente el mensaje personal
        client.on('mensaje-personal', async ( payload ) => {
            await grabarMensaje( payload );

            io.to( payload.to ).emit('mensaje-personal', payload );
        })

        client.on('disconnect', () => {
            usuarioDesconectado( uid ); 
        });

        
    });
};
