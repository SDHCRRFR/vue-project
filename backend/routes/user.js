import express from 'express'
import { register, getUsersController, deleteUserController, updateUserController } from '../controllers/userController.js';
import { login } from '../controllers/userConnectControllers.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/', getUsersController);
userRouter.delete('/:userId', deleteUserController);
userRouter.put('/:id', updateUserController);


export default userRouter;