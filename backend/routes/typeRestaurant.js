import express from 'express'
import { index } from '../controllers/typeRestaurantController.js';

const typeRestaurantRouter = express.Router();

typeRestaurantRouter.get('/', index);

export default typeRestaurantRouter;