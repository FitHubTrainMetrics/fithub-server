import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (name: string, email: string, password: string): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return user;
};

export const getUser = async (userId: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

export const updateUser = async (userId: number, name: string, email: string, password: string): Promise<User | null> => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      email,
      password,
    },
  });

  return user;
};

export const deleteUser = async (userId: number): Promise<void> => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};
