/******************************* */
// Import des modules nécessaire
import { createRegister } from "../repositories/userRepositories.js";
import argon2 from "argon2";

const register = async (req, res) => {

    const bodyHashed = {
      ...req.body,
      password: await argon2.hash(req.body.password),
    };
    
    // Insértion des données de l'utilisateur dans la base de données
    const insertionResult = await createRegister(bodyHashed);

    if(!insertionResult.succes){
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

export { register };
