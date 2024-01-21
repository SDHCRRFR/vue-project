import express from 'express'
import { register, getUsersController, deleteUserController } from '../controllers/userController.js';
import { login } from '../controllers/userConnectControllers.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/', getUsersController);
userRouter.delete('/:userId', deleteUserController);

export default userRouter;