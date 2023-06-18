import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../usecases/user/register-user';

export class RegisterUserController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new RegisterUserUseCase();

    try {
      const result = await useCase.execute(req.body);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(404).json(err);
    }
  }
}
