import { Request, Response } from 'express';
import * as WorkoutService from '../services/WorkoutService';

export const createWorkout = async (req: Request, res: Response) => {
  try {
    const { title, personalTrainerId, studentId } = req.body;
    const workout = await WorkoutService.createWorkout(title, personalTrainerId.toString(), studentId.toString());
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create workout.' });
  }
};

export const getWorkout = async (req: Request, res: Response) => {
  try {
    const workoutId = parseInt(req.params.id);
    const workout = await WorkoutService.getWorkout(workoutId);
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get workout.' });
  }
};

export const updateWorkout = async (req: Request, res: Response) => {
  try {
    const workoutId = parseInt(req.params.id);
    const { title, personalTrainerId, studentId } = req.body;
    const updatedWorkout = await WorkoutService.updateWorkout(workoutId, title, personalTrainerId.toString(), studentId.toString());
    res.json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update workout.' });
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const workoutId = parseInt(req.params.id);
    await WorkoutService.deleteWorkout(workoutId);
    res.json({ message: 'Workout deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete workout.' });
  }
};
