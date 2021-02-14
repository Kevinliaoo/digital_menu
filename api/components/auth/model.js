import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = Schema({
    username: {
        type: String, 
        required: true, 
    }, 
    password: {
        type: String, 
        required: true,
    }, 
})

export const model = mongoose.model('auth', mySchema);