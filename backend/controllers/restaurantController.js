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
  const { id } = req.params;
  // Vérifie si le restaurant existe
  const existingRestaurant = await getOneRestaurantById(id);
  if (!existingRestaurant || existingRestaurant.length === 0) {
    return res.status(404).json({ error: "Restaurant non trouvé." });
  }
  // Vérifie si l'utilisateur est le créateur du restaurant
  // (Tu devras adapter cela en fonction de la manière dont tu gères les utilisateurs)
  const userIdFromToken = req.user.id; // Supposons que tu récupères l'ID de l'utilisateur à partir du token
  if (existingRestaurant[0].user_id !== userIdFromToken) {
    return res.status(403).json({ error: "Vous n'avez pas la permission de supprimer ce restaurant." });
  }
  // Supprime le restaurant
  const result = await deleteOneRestaurant(id);
  if (result.success) {
    res.status(200).json({ message: "Restaurant supprimé avec succès." });
  } else {
    res.status(500).json({ error: "Erreur lors de la suppression du restaurant." });
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
