export const socketController = (io) => {
    // Mensajes de Sockets
    io.on('connection', (client) => {
        console.log('Cliente conectado');

        client.on('disconnect', () => {
            console.log('Cliente desconectado');
        });

        // Puedes descomentar esto para probar el envío y recepción de mensajes
        // client.on('mensaje', (payload) => {
        //     console.log('Mensaje recibido', payload);
        //     io.emit('mensaje', { admin: 'Nuevo mensaje desde el servidor' });
        // });
    });
};
