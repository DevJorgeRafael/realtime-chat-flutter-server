import Mensaje from '../models/mensaje.js';

export const obtenerChat = async (req, res) => {
    const miId = req.uid;
    const mensajesFrom = req.params.idFrom

    const last30 = await Mensaje.find({
        $or: [
            { from: miId, to: mensajesFrom  }, 
            { from: mensajesFrom, to: miId }
        ]
    })
    .sort({createdAt: 'desc'})
    .limit(30);

    res.json({
        ok: true,
        messages: last30
    })
}