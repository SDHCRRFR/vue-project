/***************************************
 Import des modules néccessaires */
import argon2 from 'argon2';
import { checkLoginCredentials } from '../repositories/userRepositories.js';

const login = async (req, res) => {
  const { email, password } = req.body;
  // Vérification des informations de connexion
  const user = await checkLoginCredentials(email);
  if (!user) {
    console.log(user);
    return res.status(403).json({ message: 'Addresse email incorrect !', status: 403 });
  }
  // 
  const passwordMatch = await argon2.verify(user.password, password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Mot de passe incorrect', status: 401 });
  }
  // Si
  
  res.status(200).json({ message: 'Connexion réussie', status: 200, data: user});
};


export { login }; 