import { comparePasswords, encryptPassword } from '../../utils/bcrypt.js';
import { signJWT } from '../../utils/jwt.js';
import { registerStore, getUser } from './store.js';

export const login = (username, password) => {
    return new Promise(async (resolve, reject) => {
        const user = await getUser(username); 
        if(user === null) return reject('Access denied');
        const samePsw = await comparePasswords(password, user.password);
        if(!samePsw) return reject('Access denied');
        const jwt = signJWT(user);
        resolve({jwt, user});
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