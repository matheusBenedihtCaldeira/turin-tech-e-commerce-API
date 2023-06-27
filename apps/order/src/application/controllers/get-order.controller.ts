import { GetOrderByIdUseCase } from '../usecases/get-order';
import { Request, Response } from 'express';

export class GetOrderByIdController {
  async handle(req: Request, res: Response) {
    const useCase = new GetOrderByIdUseCase();

    try {
      const result = await useCase.execute(req.params.id);
      return res.json(result);
    } catch (err) {
      console.log(err);
    }
  }
}
