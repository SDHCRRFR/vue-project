/*******************************/
/***Import des modules nécessaires */
import express from "express";
import restaurantRouter from "./routes/restaurant.js";

/*****************************/
/*** Initialisation de l'API */
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

/******************************/
/*** Mise en place du routage */

        /**** ici !  */

/********************************/

app.use("/api/restaurant", restaurantRouter);

app.listen(port, () => console.log("app running baby"));
