import { Request, Response } from 'express';
import { IndexOrdersUseCase } from '../usecases/index-orders';

export class IndexOrdersController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new IndexOrdersUseCase();

    try {
      const result = await useCase.execute();
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}
