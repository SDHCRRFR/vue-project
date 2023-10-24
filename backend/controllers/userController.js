/******************************* */
// Import des modules nécessaire 
import { createRegister } from "../repositories/userRepositories.js";
import jwt from 'jsonwebtoken';
import argon2 from "argon2";

const register = async(req, res) => {
   /*----------------------------------------------------->
   // // récupérer la saisie
   <------------------------------------------------------*/
   
   console.log(req.body);
   const bodyHashed = {
      ...req.body,
      password: await argon2.hash(req.body.password),
   };
   const donnee = await createRegister(bodyHashed);
   // const donnee = await createRegister(req.body);
   res.status(200).json({
      data: donnee,
      message: 'User created',
   });

   // Récupérez les données du formulaire
   const { nom, email, password } = req.body;

   // Hash du mot de passe avant de l'enregistrer dans la base de données
   const hashedPassword = await argon2.hash(password);

   // Créez un objet avec les informations de l'utilisateur
   const userData = {
      nom: nom,
      email: email,
      password: hashedPassword, // Utilisez le mot de passe haché
   };

   // Insérez les données de l'utilisateur dans la base de données
   try {
      const insertionResult = await createRegister(userData);
      console.log(userData + "l'insertion c'est dérouler avec succès !" );
      // Vous pouvez ajouter des vérifications ici pour vous assurer que l'insertion s'est déroulée avec succès

      // Générez un jeton d'authentification
      const userForToken = {
         id: insertionResult.insertId,
         email: email,
      };
      const token = jwt.sign(userForToken, 'monCodeSecret', { expiresIn: '1h' });

      // Stockez le jeton dans un cookie
      res.cookie('token', token);

      // Redirigez l'utilisateur vers la page d'accueil ou une autre page
      res.redirect('/admin/dashboard');
   } catch (error) {
      console.error('Erreur lors de l"inscription :', error);
      res.status(500).json({ error: 'Erreur lors de l"inscription' });
   }
   
   
   
   // Après avoir enregistré l'utilisateur, générez un jeton d'authentification
   const user = {
      // Vous pouvez ajouter ici les informations de l'utilisateur à inclure dans le jeton
      id: donnee.insertId,
      email: req.body.email,
   };
   const token = jwt.sign(user, 'monCodeSecret', { expiresIn: '1h' });

   // Redirigez l'utilisateur vers la page d'accueil ou autre
   res.cookie('token', token); // Stockez le jeton dans un cookie
   res.redirect('/admin/dashboard');
}

export { register };