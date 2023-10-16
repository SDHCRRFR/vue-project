/******************************* */
// Import des modules nécessaire 
import { createRegister } from "../repositories/userRepositories.js";
import argon2 from "argon2";

const register = async(req, res) => {
   // récupérer la saisie
   console.log(req.body);

   // const donnee = await createRegister(req.body);

   const bodyHashed = {
      ...req.body,
      password: await argon2.hash(req.body.password),
  };
  
  const donnee = await createRegister(bodyHashed);

   res.status(200).json({
      data: donnee,
      message: 'User created',
   });
}

export { register };