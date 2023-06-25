import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/UserController';
import authMiddleware from '../middlewares/AuthMiddleware';

const userRouter = Router();

userRouter.post('/', authMiddleware, createUser);
userRouter.get('/:id', authMiddleware, getUser);
userRouter.put('/:id', authMiddleware, updateUser);
userRouter.delete('/:id', authMiddleware, deleteUser);

export default userRouter;
