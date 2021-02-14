import food from '../components/food/network.js';
import categories from '../components/categories/network.js';
import auth from '../components/auth/network.js';

export const routes = server => {
    server.use('/api/food', food);
    server.use('/api/categories', categories);
    server.use('/api/auth', auth);
}