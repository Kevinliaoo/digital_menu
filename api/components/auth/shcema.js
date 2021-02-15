import Joi from 'joi';

// Esquemas de entrada 
export const newUserSchema = Joi.object({
    username: 
        Joi.string().
        pattern(new RegExp('[a-z]+')).
        required(),
    password: Joi.string().required(),
    confirmPsw: Joi.ref('password'),
})

export const loginUserSchema = Joi.object({
    username: 
        Joi.string().
        pattern(new RegExp('[a-z]+')).
        required(), 
    password: Joi.string().required(),
})