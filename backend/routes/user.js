import express from 'express'
import { register, getUsersController, deleteUserController, getUserDetails, updateUser } from '../controllers/userController.js';
import { login } from '../controllers/userConnectControllers.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/', getUsersController);
userRouter.delete('/:userId', deleteUserController);
userRouter.get('/:userId', getUserDetails);
userRouter.put('/update/:userId', updateUser);


export default userRouter;