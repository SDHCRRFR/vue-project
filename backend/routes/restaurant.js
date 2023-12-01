import express from 'express'
import { index, getRestaurantById } from '../controllers/restaurantController.js';

const restaurantRouter = express.Router();

restaurantRouter.get('/', index);

restaurantRouter.get('/:id', getRestaurantById);

export default restaurantRouter;