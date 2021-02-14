import Joi from 'joi';

// Esquemas de entrada 
export const newUserSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirmPsw: Joi.string().valid(Joi.ref('password')).required(),
})

export const loginUserSchema = Joi.object({
    username: Joi.string().required(), 
    password: Joi.string().required(),
})