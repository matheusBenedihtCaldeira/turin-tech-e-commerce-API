import { Request, Response } from 'express';
import { R2d2UseCase } from '../usecases/r2d2-usecase';

export class R2d2Controller {
  async handle(req: Request, res: Response) {
    const useCase = new R2d2UseCase();

    try {
      const result = await useCase.execute(req.body);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}
