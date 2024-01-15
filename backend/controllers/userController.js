/******************************* */
// Import des modules nécessaire
// import connect from "../services/db.js";
import {
  createRegister,
  updateUserInDatabase,
  getUsers,
  getUserById,
  deleteUser,
} from "../repositories/userRepositories.js";
import argon2 from "argon2";

const register = async (req, res) => {
  const bodyHashed = {
    ...req.body,
    password: await argon2.hash(req.body.password),
  };
  // Insértion des données de l'utilisateur dans la base de données
  const insertionResult = await createRegister(bodyHashed);
  if (!insertionResult.succes) {
    return res.status(400).json({
      status: 400,
      message: "Erreur lors de la création de l'utilisateurl'adresse email doit etre associé a un autre compte.",
    });
  } else {
    return res.status(200).json({
      status: 200,
      message: "Ok user create",
    });
  }
};


const deleteUserController = async (req, res) => {
  const userId = req.params.userId;
  try {
    const deletionResult = await deleteUser(userId);
    if (!deletionResult.success) {
      return res.status(500).json({
        status: 500,
        message: "Erreur lors de la suppression de l'utilisateur",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Utilisateur supprimé avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur:", error);
    res.status(500).json({
      status: 500,
      message: "Erreur lors de la suppression de l'utilisateur",
    });
  }
};

const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ status: 200, data: users });
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    res.status(500).json({
      status: 500,
      message: "Erreur lors de la récupération des utilisateurs",
    });
  }
};


const updateUserController = async (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;

  try {
    // Vérifiez d'abord si l'utilisateur existe
    const existingUser = await getUserById(userId);
    if (!existingUser) {
      return res.status(404).json({
        status: 404,
        message: "Utilisateur non trouvé",
      });
    }
    // Si l'utilisateur existe, effectuez la mise à jour
    const success = await updateUserInDatabase(userId, updatedUserData);

    if (success) {
      res.status(200).json({
        status: 200,
        message: "Utilisateur mis à jour avec succès",
      });
    } else {
      res.status(500).json({
        status: 500,
        message: "Erreur lors de la mise à jour de l'utilisateur",
      });
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour des détails de l\'utilisateur:', error);
    res.status(500).json({
      status: 500,
      message: "Erreur lors de la mise à jour des détails de l'utilisateur",
    });
  }
};


export { register, getUsersController, updateUserController, deleteUserController };
