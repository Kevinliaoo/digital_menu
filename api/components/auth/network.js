import express from 'express'; 

import { login, register } from './controller.js';
import { newUserSchema } from './shcema.js';
import { validationHandler } from '../../network/schemaValidation.js';
import response from '../../network/response.js';

const router = express.Router(); 

router.post('/login', (req, res) => {
    login(req.body.username, req.body.password)
        .then(result => response.success(req, res, result))
        .catch(e => response.error(req, res, e))
})

router.post('/register', validationHandler(newUserSchema), (req, res) => {
    register(req.body.username, req.body.password, req.body.cofirmPsw) 
        .then(result => response.success(req, res, result, 201))
        .catch(e => response.error(req, res, e));
})

export default router; 