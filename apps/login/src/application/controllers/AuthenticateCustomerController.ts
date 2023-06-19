import { Request, Response } from 'express';
import { AuthenticateCustomerUseCase } from '../useCases/authenticateCustomer/AuthenticateCustomerUseCase';

export class AuthenticateCustomerController {
  async handle(req: Request, res: Response) {
    const useCase = new AuthenticateCustomerUseCase();
    const token = await useCase.execute(req.body);
    return res.json(token);
  }
}
