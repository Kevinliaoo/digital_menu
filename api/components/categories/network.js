import express from 'express'; 

import { getCategories } from './controller.js';
import response from '../../network/response.js';

const router = express.Router(); 

router.get('/', (req, res) => {
    getCategories()
        .then(cats => response.success(req, res, cats, 200))
        .catch(e => response.error(req, res, e, 500));
}); 

export default router; 