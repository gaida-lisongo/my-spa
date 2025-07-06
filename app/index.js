import { 
    Promotion,
    Unite,
    Element
 } from './controllers/index.js';
import Routes from './routes.js';

const routes = new Routes([
    {
        path: '#promotions',
        controller: Promotion
    },
    {
        path: '#unites',
        controller: Unite
    },
    {
        path: '#elements',
        controller: Element
    }
]);

routes.run();
