import express from 'express'
import { index, getRestaurantById, getSortedRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from '../controllers/restaurantController.js';

const restaurantRouter = express.Router();

restaurantRouter.get('/', index);
restaurantRouter.get('/sortedRestaurant', getSortedRestaurant);
restaurantRouter.get('/:id', getRestaurantById);
restaurantRouter.post('/restaurants', createRestaurant);
restaurantRouter.put('/restaurants/:id', updateRestaurant);
restaurantRouter.delete('/restaurants/:id', deleteRestaurant);

export default restaurantRouter;