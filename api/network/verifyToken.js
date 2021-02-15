import { checkOwner } from '../utils/jwt.js';

export const checkAuth = () => {
    return(req, res, next) => {
        const userId = req.body._id; 
        checkOwner(req, userId);
        next();
    }
}