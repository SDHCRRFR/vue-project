/******************************* */
// Import des modules nécessaire 
import { createRegister } from "../repositories/userRepositories.js";

const register = async(req, res) => {
   // récupérer la saisie
   console.log(req.body);

   const donnee = await createRegister(req.body);

   res.status(200).json({
      data: donnee,
      message: 'User created',
   });
}

export { register };