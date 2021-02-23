import express from 'express'; 

import { login, register } from './controller.js';
import { newUserSchema, loginUserSchema } from './shcema.js';
import { validationHandler } from '../../network/schemaValidation.js';
import { checkAuth } from '../../network/verifyToken.js';
import response from '../../network/response.js';

const router = express.Router(); 

router.post('/login', validationHandler(loginUserSchema), (req, res) => {
    login(req.body.username, req.body.password)
        .then(result => response.success(req, res, result))
        .catch(e => response.error(req, res, e))
})

router.post('/register', validationHandler(newUserSchema), (req, res) => {
    register(req.body.username, req.body.password, req.body.cofirmPsw) 
        .then(result => response.success(req, res, result, 201))
        .catch(e => response.error(req, res, e));
})

router.get('/checkAuth', checkAuth(), (req, res) => {
    response.success(req, res, 'Authorized');
})

export default router; 