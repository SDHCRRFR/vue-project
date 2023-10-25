/*******************************/
/***Import des modules nécessaires */
import express from "express";
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

// CORS
router.use(
    cors({
        origin: [ 'http://localhost:5173', 'http://127.0.0.1:5173' ]
}),
);

router.use("/api/restaurant", restaurantRouter);
router.use("/api/user", userRouter);

app.listen(port, () => console.log("app running baby"));
