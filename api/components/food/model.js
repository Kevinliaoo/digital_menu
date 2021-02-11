import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = Schema({
    name: {
        type: String, 
        required: true, 
    }, 
    category: {
        type: String, 
        required: true,
    },
    descr: {
        type: String,
    }, 
    price: {
        type: Number, 
    }, 
    img_url: {
        type: String,
        required: true, 
    }
})

export const model = mongoose.model('food', mySchema);