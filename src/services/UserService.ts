import { IUser } from '../schemas/UserSchema';
import UserModel from '../schemas/UserSchema';

export const createUser = async (name: string, email: string, password: string): Promise<IUser> => {
  // Lógica para criar um novo usuário

  // Crie um novo objeto de usuário
  const newUser = new UserModel({ name, email, password });

  // Salve o usuário no banco de dados
  await newUser.save();

  // Retorne o usuário criado
  return newUser;
};

export const getUser = async (userId: string): Promise<IUser> => {
  // Lógica para obter um usuário pelo ID

  // Obtenha o usuário do banco de dados ou qualquer outra fonte de dados
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new Error('User not found.');
  }

  // Retorne o usuário encontrado
  return user;
};

export const updateUser = async (userId: string, name: string, email: string, password: string): Promise<IUser> => {
  // Lógica para atualizar um usuário

  // Atualize o usuário no banco de dados
  const updatedUser = await UserModel.findByIdAndUpdate(userId, { name, email, password }, { new: true });

  if (!updatedUser) {
    throw new Error('User not found.');
  }

  // Retorne o usuário atualizado
  return updatedUser;
};

export const deleteUser = async (userId: string): Promise<void> => {
  // Lógica para excluir um usuário

  // Exclua o usuário do banco de dados
  await UserModel.findByIdAndDelete(userId);
};
