import express from 'express'
import { index } from '../controllers/typeRestaurant.js'

const typeRestaurantRouter = express.Router();

typeRestaurant.get('/', index);

export default typeRestaurantRouter;