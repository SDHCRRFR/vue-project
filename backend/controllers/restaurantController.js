import { getAllRestaurant } from "../repositories/restaurantRepositories.js";

const index = async(req, res) => {
   const donnee = await getAllRestaurant();
   res.status(200).json({
    data: donnee
   })
}

export { index };