import { Request, Response } from 'express';
import { CreateOrderUseCase } from '../usecases/create-order';

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    const useCase = new CreateOrderUseCase();
    const order = await useCase.execute(req.body);
    return res.json(order);
  }
}
