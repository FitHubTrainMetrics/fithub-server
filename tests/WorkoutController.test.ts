import { Request, Response } from 'express';
import * as WorkoutController from '../src/controllers/WorkoutController';
import * as WorkoutService from '../src/services/WorkoutService';

jest.mock('../src/services/WorkoutService');

describe('WorkoutController', () => {
  describe('createWorkout', () => {
    it('should create a new workout', async () => {
      const req = {
        body: {
          title: 'Workout 1',
          personalTrainerId: 1,
          studentId: 2,
        },
      } as unknown as Request;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const createdWorkout = {
        id: 1,
        title: 'Workout 1',
        personalTrainerId: 1,
        studentId: 2,
      };

      (WorkoutService.createWorkout as jest.Mock).mockImplementation(async () => createdWorkout);

      await WorkoutController.createWorkout(req, res);

      expect(res.json).toHaveBeenCalledWith(createdWorkout);
    });

    it('should handle errors when creating a workout', async () => {
      const req = {
        body: {
          title: 'Workout 1',
          personalTrainerId: 1,
          studentId: 2,
        },
      } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to create workout.';
      (WorkoutService.createWorkout as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await WorkoutController.createWorkout(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('getWorkout', () => {
    it('should get a workout by ID', async () => {
      const workoutId = 1;
      const req = {
        params: {
          id: workoutId,
        },
      } as unknown as Request;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const workout = {
        id: 1,
        title: 'Workout 1',
        personalTrainerId: 1,
        studentId: 2,
      };

      (WorkoutService.getWorkout as jest.Mock).mockImplementation(async () => workout);

      await WorkoutController.getWorkout(req, res);

      expect(res.json).toHaveBeenCalledWith(workout);
    });

    it('should handle errors when getting a workout', async () => {
      const workoutId = 1;
      const req = {
        params: {
          id: workoutId,
        },
      } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to get workout.';
      (WorkoutService.getWorkout as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await WorkoutController.getWorkout(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('updateWorkout', () => {
    it('should update a workout', async () => {
      const workoutId = 1;
      const req = {
        params: {
          id: workoutId,
        },
        body: {
          title: 'Updated Workout',
          personalTrainerId: 1,
          studentId: 2,
        },
      } as unknown as Request;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const updatedWorkout = {
        id: 1,
        title: 'Updated Workout',
        personalTrainerId: 1,
        studentId: 2,
      };

      (WorkoutService.updateWorkout as jest.Mock).mockImplementation(async () => updatedWorkout);

      await WorkoutController.updateWorkout(req, res);

      expect(res.json).toHaveBeenCalledWith(updatedWorkout);
    });

    it('should handle errors when updating a workout', async () => {
      const workoutId = 1;
      const req = {
        params: {
          id: workoutId,
        },
        body: {
          title: 'Updated Workout',
          personalTrainerId: 1,
          studentId: 2,
        },
      } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to update workout.';
      (WorkoutService.updateWorkout as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await WorkoutController.updateWorkout(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('deleteWorkout', () => {
    it('should delete a workout', async () => {
      const workoutId = 1;
      const req = {
        params: {
          id: workoutId,
        },
      } as unknown as Request;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      (WorkoutService.deleteWorkout as jest.Mock).mockImplementation(async () => {});

      await WorkoutController.deleteWorkout(req, res);

      expect(res.json).toHaveBeenCalledWith({ message: 'Workout deleted successfully.' });
    });

    it('should handle errors when deleting a workout', async () => {
      const workoutId = 1;
      const req = {
        params: {
          id: workoutId,
        },
      } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to delete workout.';
      (WorkoutService.deleteWorkout as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await WorkoutController.deleteWorkout(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});
