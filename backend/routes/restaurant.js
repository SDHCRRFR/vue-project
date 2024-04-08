import express from 'express'
import { 
    index, 
    getRestaurantById, 
    getSortedRestaurant, 
    createRestaurantController,
    deleteRestaurant
} from '../controllers/restaurantController.js';

const restaurantRouter = express.Router();


restaurantRouter.get('/', index);
restaurantRouter.get('/sortedRestaurant', getSortedRestaurant);
restaurantRouter.get('/:id', getRestaurantById);
restaurantRouter.post('/', createRestaurantController);
restaurantRouter.delete('/:restaurantId', deleteRestaurant);

export default restaurantRouter;