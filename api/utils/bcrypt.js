import bcrypt from 'bcrypt'

export const encryptPassword = psw => {
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

export const comparePasswords = async (password, hashedPsw) => {
    const result = await bcrypt.compare(password, hashedPsw);
    return result; 
}