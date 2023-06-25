import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../schemas/UserSchema';

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    // Verificar se o usuário já está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists.');
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário no banco de dados
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Retornar o usuário registrado
    return user;
  } catch (error) {
    throw new Error('Failed to register user.');
  }
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found.');
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password.');
    }

    // Gerar um token de autenticação (JWT)
    const token = generateToken(user);

    // Retornar o token
    return token;
  } catch (error) {
    throw new Error('Failed to authenticate user.');
  }
};

const generateToken = (user: IUser) => {
  // Gerar um token de autenticação (JWT)
  const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
  return token;
};
