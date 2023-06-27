import { DeleteOrderUserCase } from '../usecases/delete-order';
import { Request, Response } from 'express';

export class DelteOrderController {
  async handle(req: Request, res: Response) {
    const useCase = new DeleteOrderUserCase();

    try {
      const result = await useCase.execute(req.params.id);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}
