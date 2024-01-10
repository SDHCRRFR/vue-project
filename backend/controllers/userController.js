/******************************* */
// Import des modules nécessaire
import connect from "../services/db.js";
import {
  createRegister,
  getUsers,
  deleteUser,
  getUserDetailsFromDatabase,
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
      message: "Erreur mon pote",
    });
  } else {
    return res.status(200).json({
      status: 200,
      message: "Ok user create",
    });
  }
};

const getUserDetails = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await getUserDetailsFromDatabase(userId);
    if (user) {
      res.status(200).json({ status: 200, data: user });
    } else {
      res.status(404).json({ status: 404, message: "Utilisateur non trouvé" });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails de l'utilisateur:",
      error
    );
    res
      .status(500)
      .json({
        status: 500,
        message: "Erreur lors de la récupération des détails de l'utilisateur",
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

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body; // Données mises à jour de l'utilisateur
  try {
    // Ajoutez votre logique pour mettre à jour les détails de l'utilisateur par son ID
    const success = await updateUserInDatabase(userId, updatedUserData);
    if (success) {
      res
        .status(200)
        .json({ status: 200, message: "Utilisateur mis à jour avec succès" });
    } else {
      res.status(404).json({ status: 404, message: "Utilisateur non trouvé" });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour des détails de l'utilisateur:",
      error
    );
    res
      .status(500)
      .json({
        status: 500,
        message: "Erreur lors de la mise à jour des détails de l'utilisateur",
      });
  }
};

const updateUserInDatabase = async (userId, updatedUserData) => {
  // Ajoutez votre logique pour mettre à jour les détails de l'utilisateur dans la base de données
  const { nom, email, password, role_id } = updatedUserData;
  const updateQuery = `
    UPDATE tabledecoeur.user
    SET nom = ?, email = ?, password = ?, role_id = ?
    WHERE id = ?;
  `;

  try {
    const [result] = await connect.query(updateQuery, [
      nom,
      email,
      password,
      role_id,
      userId
    ]);
    // Vérifiez si la mise à jour a affecté des lignes (utilisateur trouvé)
    return result.affectedRows > 0;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour des détails de l'utilisateur dans la base de données:",
      error
    );
    throw error;
  }
};

export { register, getUserDetails, getUsersController, updateUser, updateUserInDatabase, deleteUserController };
