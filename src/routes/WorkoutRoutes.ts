import { Router } from 'express';
import * as WorkoutController from '../controllers/WorkoutController';

const router = Router();

router.post('/', WorkoutController.createWorkout);
router.get('/:id', WorkoutController.getWorkout);
router.put('/:id', WorkoutController.updateWorkout);
router.delete('/:id', WorkoutController.deleteWorkout);

export default router;
