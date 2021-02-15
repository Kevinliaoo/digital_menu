import jwt from 'jsonwebtoken';

import { config } from '../config.js';

export const signJWT = data => {
    return jwt.sign(data.toJSON(), config.JWT_SECRET);
}

export const checkOwner = (req, owner) => {
    const decoded = decodeHeader(req);
    if(decoded._id !== owner) throw new Error('Access denied');
}

const decodeHeader = req => {
    const authorization = req.headers.authorization || ""; 
    const token = getToken(authorization); 
    const decoded = verify(token);
    return decoded; 
}

const getToken = auth => {
    if(!auth) throw new Error('Access denied');
    if(auth.indexOf('Bearer') === -1) throw new Error('Invalid format');

    let token = auth.replace('Bearer ', '');
    return token;
}

const verify = token => {
    return jwt.verify(token, config.JWT_SECRET);
}