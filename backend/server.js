/*******************************/
/***Import des modules nécessaires */
import express from "express";
import typeRestaurantRouter from "./routes/typeRestaurant.js";
// import nodemailer from 'nodemailer';
import restaurantRouter from "./routes/restaurant.js";
import userRouter from "./routes/user.js";
import cors from 'cors';

/*****************************/
/*** Initialisation de l'API */
const app = express();
const port = 3000;


const router = express.Router();
app.use(router);
router.use(express.json());
router.use(express.static('public'));

// CORS
router.use(
    cors({
        origin: [ 'http://localhost:5173', 'http://127.0.0.1:5173' ]
}),
);

// app.post('/send-email', (req, res) => {
//     const { nom, contact, number, birthdate, gender, address } = req.body;

//   // Configuration du transporteur pour l'envoi d'e-mails (utilisez vos propres informations)
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'votre_email@gmail.com',
//       pass: 'votre_mot_de_passe'
//     }
//   });
//   // Corps de l'e-mail
//   const mailOptions = {
//     from: 'votre_email@gmail.com',
//     to: 'destinataire@example.com',
//     subject: 'Nouvelle inscription',
//     html: `
//       <p>Nom: ${nom}</p>
//       <p>Email: ${contact.email}</p>
//       <p>Numéro: ${number}</p>
//       <p>Date de naissance: ${birthdate}</p>
//       <p>Genre: ${gender}</p>
//       <p>Adresse: ${address.line1}, ${address.line2}, ${address.city}, ${address.postalCode}</p>
//     `
//   };

//   // Envoi de l'e-mail
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('E-mail envoyé : ' + info.response);
//   });
// });


router.use("/api/restaurant", restaurantRouter);
router.use("/api/restaurant/type", typeRestaurantRouter);
router.use("/api/user", userRouter);

app.listen(port, () => console.log("app running baby"));
