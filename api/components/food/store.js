import { model } from './model.js';

export const getByCategoryDB = async category => {
    const result = await model.find({
        category: category
    }); 
    if(result) return result; 
    else return null;
}

export const addFoodDB = async data => {
    const newFood = new model(data);
    try {
        const result = await newFood.save();
        return result; 
    } catch(e) {
        return null;
    }
}