import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import * as UserController from '../src/controllers/UserController';
import * as UserService from '../src/services/UserService';

jest.mock('../src/services/UserService');

describe('UserController', () => {
  describe('createUser', () => {
    it('should create a new user', async () => {
      const req = {
        body: {
          name: 'John',
          email: 'john@example.com',
          password: 'password',
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const createdUser = {
        id: 1,
        name: 'John',
        email: 'john@example.com',
      };

      (UserService.createUser as jest.Mock).mockImplementation(async () => createdUser);

      await UserController.createUser(req, res);

      expect(res.json).toHaveBeenCalledWith(createdUser);
    });

    it('should handle errors when creating a user', async () => {
      const req = {
        body: {
          name: 'John',
          email: 'john@example.com',
          password: 'password',
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to create user.';
      (UserService.createUser as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await UserController.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('getUser', () => {
    it('should get a user by ID', async () => {
      const userId = 1;
      const req = {
        params: {
          id: String(userId),
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const user = {
        id: userId,
        name: 'John',
        email: 'john@example.com',
      };

      (UserService.getUser as jest.Mock).mockImplementation(async () => user);

      await UserController.getUser(req, res);

      expect(res.json).toHaveBeenCalledWith(user);
    });

    it('should handle errors when getting a user', async () => {
      const userId = 1;
      const req = {
        params: {
          id: String(userId),
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to get user.';
      (UserService.getUser as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await UserController.getUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const userId = 1;
      const req = {
        params: {
          id: String(userId),
        },
        body: {
          name: 'John',
          email: 'john@example.com',
          password: 'newpassword',
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      const updatedUser = {
        id: userId,
        name: 'John',
        email: 'john@example.com',
      };

      (UserService.updateUser as jest.Mock).mockImplementation(async () => updatedUser);

      await UserController.updateUser(req, res);

      expect(res.json).toHaveBeenCalledWith(updatedUser);
    });

    it('should handle errors when updating a user', async () => {
      const userId = 1;
      const req = {
        params: {
          id: String(userId),
        },
        body: {
          name: 'John',
          email: 'john@example.com',
          password: 'newpassword',
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to update user.';
      (UserService.updateUser as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await UserController.updateUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const userId = 1;
      const req = {
        params: {
          id: String(userId),
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      (UserService.deleteUser as jest.Mock).mockImplementation(async () => {});

      await UserController.deleteUser(req, res);

      expect(res.json).toHaveBeenCalledWith({ message: 'User deleted successfully.' });
    });

    it('should handle errors when deleting a user', async () => {
      const userId = 1;
      const req = {
        params: {
          id: String(userId),
        },
      } as unknown as Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const errorMessage = 'Failed to delete user.';
      (UserService.deleteUser as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await UserController.deleteUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});
