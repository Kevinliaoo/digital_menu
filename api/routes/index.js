import food from '../components/food/network.js';
import categories from '../components/categories/network.js';

export const routes = server => {
    server.use('/api/food', food);
    server.use('/api/categories', categories);
}