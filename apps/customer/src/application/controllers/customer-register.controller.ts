import { Request, Response } from 'express';
import { RegisterCustomerUseCase } from '../usecases/register-customer';

export class RegisterCustomerController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new RegisterCustomerUseCase();

    try {
      const result = await useCase.execute(req.body);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(404).json(err);
    }
  }
}
