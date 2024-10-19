import Usuario from "../models/usuario.js"
import Mensaje from "../models/mensaje.js"

export const usuarioConectado = async (uid = '') => {
    const usuarioFound = await Usuario.findById(uid);
    usuarioFound.online = true;
    await usuarioFound.save();

    return usuarioFound
}

export const usuarioDesconectado = async (uid = '') => {
    const usuarioFound = await Usuario.findById(uid);
    usuarioFound.online = false;
    await usuarioFound.save();

    return usuarioFound;
}

export const grabarMensaje = async( payload ) => {

    /*
    {
        de: '',
        para: '',
        mensaje: ''
    }
    */

    try {
        const mensaje = new Mensaje( payload );
        await mensaje.save();
        
        return true;
    } catch (error) {
        return false;
    }
}
