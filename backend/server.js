/*******************************/
/***Import des modules nécessaires */
import express from "express";
import restaurantRouter from "./routes/restaurant.js";
import userRouter from "./routes/user.js";
import cors from 'cors';
import bodyParser from 'bodyParser'

// const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  // Récupérez les données du formulaire
  const { email, password } = req.body;

  // Vous pouvez maintenant vérifier ces données par rapport à celles stockées dans votre base de données
  // Par exemple, en utilisant une base de données MongoDB :
  const user = await user.findOne({ email });

  // Vérifiez si le mot de passe correspond, vous pouvez utiliser une bibliothèque de hachage comme Bcrypt
  const isPasswordMatch = await argon2d.compare(password, user.password);

  // Si les informations de connexion sont correctes, renvoyez une réponse JSON
  if (isPasswordMatch) {
    res.json({ message: 'Connexion réussie' });
  } else {
    res.status(401).json({ message: 'Échec de la connexion' });
  }
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
