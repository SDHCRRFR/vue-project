import express from 'express'
import { register, getUsersController, deleteUserController, updateUserEmailController } from '../controllers/userController.js';
import { login } from '../controllers/userConnectControllers.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/', getUsersController);
userRouter.put('/:userId/email', updateUserEmailController);
userRouter.delete('/:userId', deleteUserController);

export default userRouter;