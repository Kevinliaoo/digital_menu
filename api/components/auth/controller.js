import bcrypt from 'bcrypt';

import { registerStore } from './store.js';

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        console.log(username); 
        console.log(password); 
        resolve(username);
    })
}

export const register = (username, password, confirmPsw) => {
    return new Promise(async (resolve, reject) => {
        const hashedPsw = await encryptPassword(password);

        const res = await registerStore({username, password: hashedPsw});
        if(res) return resolve('User created'); 
        else reject('Internal error');
    })
}

const encryptPassword = psw => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(psw, 5, (error, hash) => {
            if(error) {
                reject('Error hashing the passowrd');
                return false;  
            }
            resolve(hash); 
        })
    })
}   