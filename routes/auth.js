/*
    path: api/auth
*/
import { Router } from 'express';
import { check } from  'express-validator';

import { crearUsuario, login, renewToken } from '../controllers/auth';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';

export const router = Router();


router.post('/register', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    validarCampos
], crearUsuario);

router.post('/', [
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
], login);


router.get('/renew', validarJWT, renewToken);