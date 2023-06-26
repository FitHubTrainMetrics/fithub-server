import { Request, Response } from 'express';
import * as UserService from '../services/UserService';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserService.createUser(name, email, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user.' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await UserService.getUser(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user.' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const { name, email, password } = req.body;
    const updatedUser = await UserService.updateUser(userId, name, email, password);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user.' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    await UserService.deleteUser(userId);
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user.' });
  }
};
