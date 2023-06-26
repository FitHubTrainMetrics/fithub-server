import { Router } from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddleware';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', authMiddleware, userController.create);
userRouter.get('/:id', authMiddleware, userController.get);
userRouter.put('/:id', authMiddleware, userController.update);
userRouter.delete('/:id', authMiddleware, userController.delete);

export default userRouter;
