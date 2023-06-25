import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: string;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // Verificar se o token de autenticação está presente nos headers da requisição
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('Authorization token not found.');
    }

    // Verificar a validade do token
    const decodedToken = jwt.verify(token, 'secretKey') as { userId: string };
    req.userId = decodedToken.userId;

    // Prosseguir para a próxima middleware
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized.' });
  }
};

export default authMiddleware;
