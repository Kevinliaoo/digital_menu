import { model } from './model.js';

export const registerStore = async data => {
    const newData = new model(data);
    try {
        const result = await newData.save();
        return result; 
    } catch(e) {
        return null;
    }
}