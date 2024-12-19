/******************************* */
// Import des modules nécessaire
import {
  createRegister,
  getUsers,
  deleteUser,
  updateUserEmail
} from "../repositories/userRepositories.js";
import argon2 from "argon2";

const register = async (req, res) => {
  const bodyHashed = {
    ...req.body,
    password: await argon2.hash(req.body.password),
  };
  
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
    console.log("Utilisateurs récuperez avec succès");
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    res.status(500).json({
      status: 500,
      message: "Erreur lors de la récupération des utilisateurs",
    });
  }
};


const updateUserEmailController = async (req, res) => {
  const { userId } = req.params;
  const { email } = req.body;

  try {
    const { success, result } = await updateUserEmail(userId, email);

    if (!success || result.affectedRows === 0) {
      return res.status(404).json({
        status: 404,
        message: "Utilisateur non trouvé",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Email mis à jour avec succès",
    });
  } catch (error) {
    console.error("Erreur dans le contrôleur lors de la mise à jour de l'email:", error);
    res.status(500).json({
      status: 500,
      message: "Erreur lors de la mise à jour de l'email",
    });
  }
};


export { register, getUsersController, deleteUserController, updateUserEmailController };
