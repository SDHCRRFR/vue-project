import { getAllTypeRestaurant } from "../repositories/typeRestaurantRepositories.js";

const index = async(req, res) => {
   const donnee = await getAllTypeRestaurant();
   res.status(200).json({
    typeRestaurant: donnee
   })
}

export { index };