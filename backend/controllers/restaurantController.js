import {
  createOneRestaurant,
  getAllRestaurant,
  deleteOneRestaurant,
  getOneRestaurantById
} from "../repositories/restaurantRepositories.js";

const index = async (req, res) => {
  const donnee = await getAllRestaurant();
  res.status(200).json({
    data: donnee,
  });
};

const createRestaurantController = async (req, res) => {
  const donnee = await createOneRestaurant(req.body);
  res.status(200).json({
    data: donnee,
  });
};

const deleteRestaurant = async (req, res) => {
  const restaurantId = req.params.restaurantId;
  // Vérifie si le restaurant existe
  try {
    const result = await deleteOneRestaurant(restaurantId);
    if (!result.success) {
      return res.status(500).json({ 
        status: 500,
        error: "Erreur lors de la suppression du restaurant.",
      });
    }
      res.status(200).json({ 
        status: 200,
        message: "Restaurant supprimé avec succès." 
      });
  } catch (error) {
    console.error("Erreur lors de la récupération des restaurants",
    error);
    res.status(500).json({
      status: 500, message: "Erreur lors de la récupération du restau",
    });
  }
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

export {
  index,
  getSortedRestaurant,
  createRestaurantController,
  getRestaurantById,
  deleteRestaurant
};
