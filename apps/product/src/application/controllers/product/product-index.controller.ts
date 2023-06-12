import { Request, Response } from "express";
import { IndexProductUseCase } from "../../usecases/product/index-product";

export class IndexProductController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new IndexProductUseCase();

    try {
      const result = await useCase.execute();
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}
