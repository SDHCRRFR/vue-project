/*******************************/
/***Import des modules nécessaires */
import express from "express";
import restaurantRouter from "./routes/restaurant.js";
import userRouter from "./routes/user.js";
import cors from 'cors';
import bodyParser from 'body-parser'

/*****************************/
/*** Initialisation de l'API */
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
  // Récupérez les données du formulaire
  const { email, password } = req.body;

  // Je peut maintenant vérifier ces données par rapport à celles stockées dans ma base de données
  // Par exemple, en utilisant une base de données MongoDB :
  const user = await user.findOne({ email });

  // Je vérifie si le mot de passe correspond, j'ai utiliser une bibliothèque de hachage qui s'appelle argon2
  const isPasswordMatch = await argon2d.compare(password, user.password);

  // Si les informations de connexion sont correctes, renvoyez une réponse JSON
  if (isPasswordMatch) {
    res.json({ message: 'Connexion réussie' });
  } else {
    res.status(401).json({ message: 'Échec de la connexion' });
  }
});


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
router.get('/api/restaurants', async (req, res) => {
  try {
    const query = 'SELECT * FROM restaurant'; // Remplacez "restaurant" par le nom de votre table
    const restaurants = await db.query(query); // Utilisez votre module de connexion pour exécuter la requête
    res.json({ data: restaurants });
  } catch (error) {
    console.error('Erreur lors de la récupération des restaurants :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des restaurants' });
  }
});

router.use("/api/restaurant", restaurantRouter);
router.use("/api/user", userRouter);

app.listen(port, () => console.log("app running baby"));
