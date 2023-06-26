import { PrismaClient, Workout } from '@prisma/client';

const prisma = new PrismaClient();

export const createWorkout = async (title: string, personalTrainerId: number, studentId: number): Promise<Workout> => {
  const workout = await prisma.workout.create({
    data: {
      title,
      personalTrainerId,
      studentId,
    },
  });

  return workout;
};

export const getWorkout = async (workoutId: number): Promise<Workout | null> => {
  const workout = await prisma.workout.findUnique({
    where: {
      id: workoutId,
    },
  });

  return workout;
};

export const updateWorkout = async (workoutId: number, title: string, personalTrainerId: number, studentId: number): Promise<Workout | null> => {
  const workout = await prisma.workout.update({
    where: {
      id: workoutId,
    },
    data: {
      title,
      personalTrainerId,
      studentId,
    },
  });

  return workout;
};

export const deleteWorkout = async (workoutId: number): Promise<void> => {
  await prisma.workout.delete({
    where: {
      id: workoutId,
    },
  });
};
