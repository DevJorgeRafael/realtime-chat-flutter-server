/*
    path: /api/mensajes
*/

import { Router } from 'express';
import { validarJWT } from '../middlewares/validar-jwt.js';
import { obtenerChat } from '../controllers/mensajes.js';


export const router = Router();

router.get('/:idFrom', validarJWT, obtenerChat);
