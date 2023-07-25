import express from 'express';
import restaurantRouter from './routes/restaurant.js';
const app = express();
const port = 3000;

const router = express.Router();
app.use(router);

app.use('/api/restaurant', restaurantRouter);

// app.get('/wish-list', (req, res) => {
//     const data = ["my very", "first", "message"];
//     res.send(data);
// });
 

app.listen(port, () => console.log('app running baby'));