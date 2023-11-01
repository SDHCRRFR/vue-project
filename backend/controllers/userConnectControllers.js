import argon2 from 'argon2';
import { checkLoginCredentials } from '../repositories/userRepositories.js';

const login = async (req, res) => {
  const { email, password } = req.body;
  // Vérification des informations de connexion en fonction de l'e-mail
  const user = await checkLoginCredentials(email);
  if (!user) {
    console.log(user);
    return res.status(403).json({ message: 'Addresse email incorrect !' });
  }
  // Vérification du mot de passe haché
  const passwordMatch = await argon2.verify(user.password, password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }
  // Si les informations de connexion sont correctes, vous pouvez renvoyer une réponse réussie.
  res.status(200).json({ message: 'Connexion réussie' });
};


export { login }; 