import express from 'express'; 

import response from '../../network/response.js';
import { getByCategory, addFood } from './controller.js';

const router = express.Router(); 

router.get('/:category', (req, res) => {
    getByCategory(req.params.category) 
        .then(data => {
            response.success(req, res, data);
        })
        .catch(e => {
            response.error(req, res, e); 
        });
})

// Tengo que agregar autentificación 
router.post('/', (req, res) => {
    addFood(req.body)
        .then(() => response.success(req, res))
        .catch(e => response.error(req, res, e)) 
})

export default router; 