import { getAllRestaurant, getOneRestaurantById } from "../repositories/restaurantRepositories.js";

const index = async(req, res) => {
   const donnee = await getAllRestaurant();
   res.status(200).json({
    data: donnee
   })
}

const getRestaurantById = async(req, res) => {

   const { id } = req.params;

   const donnee = await getOneRestaurantById(id);
   res.status(200).json({
    data: donnee.shift()
   })
}

export { index, getRestaurantById };