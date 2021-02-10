import { categories } from './db.js'; 

export const getCategories = () => {
    return Promise.resolve(categories);
}