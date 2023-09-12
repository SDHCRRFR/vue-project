import express from "express";
import cors from "cors";
import checkTokenMiddleware from "./jsonwebtoken/check.js";
import restaurantRouter from "./routes/restaurant.js";

/************************************/
/*** Import de la connexion à la DB */
import DB from "./db.config.js"
// let DB = require("./db.config");


/*****************************/
/*** Initialisation de l'API */
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders:
      "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

/***********************************/
/*** Import des modules de routage */
const user_router = require('./routes/users')
// const cocktail_router = require('./routes/cocktails')

const auth_router = require('./routes/auth')

/******************************/
/*** Mise en place du routage */

app.get('/', (req, res) => res.send(`I'm online. All is OK !`))

app.use('/users', checkTokenMiddleware, user_router)

app.use('/auth', auth_router)

app.get('*', (req, res) => res.status(501).send('What the hell are you doing !?!'))

/********************************/
/*** Start serveur avec test DB */
DB.sequelize.authenticate()
    .then(() => console.log('Database connection OK'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server is running on port ${process.env.SERVER_PORT}. Have fun !`)
        })
    })
    .catch(err => console.log('Database Error', err))



app.use("/api/restaurant", restaurantRouter);

app.listen(port, () => console.log("app running baby"));
