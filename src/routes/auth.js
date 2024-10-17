/*
    path: api/auth
*/
import { Router } from 'express';
import { check } from 'express-validator';

import { crearUsuario, login, renewToken } from '../controllers/auth.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

export const router = Router();

router.post('/register', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    validarCampos
], crearUsuario);

router.post('/login', [
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
], login);


router.get('/renew', validarJWT, renewToken);