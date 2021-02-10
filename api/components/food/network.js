import express from 'express'; 

import response from '../../network/response.js';

const router = express.Router(); 

router.get('/', (req, res) => {
    response.success(req, res, 'Respondiendo desde la función dummy', 500)
}); 

export default router; 