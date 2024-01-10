import {
  getAllRestaurant,
  getOneRestaurantById,
  createOneRestaurant
} from "../repositories/restaurantRepositories.js";

import Restaurant from "../services/db.js";

const index = async (req, res) => {
  const donnee = await getAllRestaurant();
  res.status(200).json({
    data: donnee,
  });
};

const getSortedRestaurant = async (req, res) => {
  const donnee = await getAllRestaurant(true);
  res.status(200).json({
    data: donnee,
  });
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  const donnee = await getOneRestaurantById(id);
  res.status(200).json({
    data: donnee.shift(),
  });
};

const createRestaurant = async (req, res) => {
  const donnee = await createOneRestaurant(req.body);
  res.status(200).json({
    data: donnee,
  });
};

const updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ data: updatedRestaurant });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour du restaurant" });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    res.json({ data: deletedRestaurant });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression du restaurant" });
  }
};

export {
  index,
  getSortedRestaurant,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
