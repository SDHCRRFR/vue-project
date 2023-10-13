/*******************************/
/***Import des modules nécessaires */
import express from "express";
import restaurantRouter from "./routes/restaurant.js";
import userRouter from "./routes/user.js";
import cors from 'cors';
import * as bcrypt from 'bcrypt';

// Fonction pour hacher un mot de passe
async function hashPassword(password) {
   try {
     const saltRounds = 10; // Niveau de salage, vous pouvez ajuster selon vos besoins
     const hashedPassword = await bcrypt.hash(password, saltRounds);
     return hashedPassword;
   } catch (error) {
     console.error('Erreur lors du hachage du mot de passe :', error);
     throw error;
   }
 }
 
 // Exemple d'utilisation
 const password = 'motdepassesecret';
 
 hashPassword(password)
   .then(hashedPassword => {
     console.log('Mot de passe haché :', hashedPassword);
     // Ensuite, vous pouvez envoyer hashedPassword au serveur pour le stockage
   })
   .catch(error => {
     // Gérer les erreurs ici
     console.log('Mot de passe non haché negro:', error);
   });



/*****************************/
/*** Initialisation de l'API */
const app = express();
const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);
router.use(express.json());

// CORS
router.use(cors({
        origin: [ 'http://localhost:5173', 'http://127.0.0.1:5173' ]
}));

/******************************/
/*** Mise en place du routage */

        /**** ici !  */

/********************************/

router.use("/api/restaurant", restaurantRouter);
router.use("/api/user", userRouter);

app.listen(port, () => console.log("app running baby"));
