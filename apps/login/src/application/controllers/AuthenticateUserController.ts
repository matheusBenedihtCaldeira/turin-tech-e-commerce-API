import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from '../useCases/authenticateUser/AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const useCase = new AuthenticateUserUseCase();
    const token = await useCase.execute(req.body);
    return res.json(token);
  }
}
