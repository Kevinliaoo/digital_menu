import { getByCategoryDB, addFoodDB } from './store.js';

export const getByCategory = category => {
    // Validar la categoria 
    return new Promise(async (resolve, reject) => {
        const foodList = await getByCategoryDB(category); 
        if(foodList) return resolve(foodList); 
        reject();
    })
}

export const addFood = data => {
    // Validar la data con joi
    return new Promise(async (resolve, reject) => {
        const result = await addFoodDB(data); 
        if(result) return resolve(result); 
        reject();
    })
}