/*******************************/
/***Import des modules nécessaires */
import express from "express";
import typeRestaurantRouter from "./routes/typeRestaurant.js";
import restaurantRouter from "./routes/restaurant.js";
import { transporter } from "./nodemailer-config.js";
import userRouter from "./routes/user.js";
import cors from "cors";

/*****************************/
/*** Initialisation de l'API */
const app = express();
const port = 3000;
const router = express.Router();

app.use(router);
router.use(express.json());
router.use(express.static("public"));

// CORS
router.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

router.use("/restaurant", restaurantRouter);
router.use("/sortedRestaurant", restaurantRouter);
router.use("/restaurant/type", typeRestaurantRouter);
router.use("/users", userRouter);
router.use("/user", userRouter);

router.post("/send-email", async (req, res) => {
  const { nom, email, number, birthdate, picked, address } = req.body;

  // Créer le corps du courriel
  const message = `
      Nom: ${nom}
      Email: ${email}
      Numéro: ${number}
      Date de naissance: ${birthdate}
      Genre: ${picked}
      Adresse:
        Ligne 1: ${address.line1}
        Ligne 2: ${address.line2}
        Ville: ${address.ville}
        Code postal: ${address.code_postale}
    `;

  // Paramètres du courriel
  const mailOptions = {
    from: "sdhoudjadji.docs@gmail.com",
    to: "houdjadji_said@carrefour.com",
    subject: "Nouveau formulaire d'inscription",
    text: message,
  };

  try {
    // Envoie du courriel
    await transporter.sendMail(mailOptions);
    console.log("Courriel envoyé avec succès");
    res.status(200).json({ message: "Courriel envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'envoi du courriel:", error);
    res.status(500).json({ error: "Erreur lors de l'envoi du courriel" });
  }
});


app.listen(port, () => console.log("app running baby"));
