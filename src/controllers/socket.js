import Usuario from "../models/usuario.js"

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

