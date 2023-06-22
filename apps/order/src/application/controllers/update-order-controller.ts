import { UpdateOrderUseCase } from '../usecases/update-order';
import { Request, Response } from 'express';

export class UpdateOrderController {
  async handle(req: Request, res: Response) {
    const useCase = new UpdateOrderUseCase();

    try {
      const result = await useCase.execute(req.params.id, req.body);
      return res.json(result);
    } catch (err) {
      console.log(err);
    }
  }
}
