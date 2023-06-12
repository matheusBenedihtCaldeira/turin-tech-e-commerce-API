import { Request, Response } from "express";
import { UpdateProductUseCase } from "../../usecases/product/update-product";

export class UpdateProductController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new UpdateProductUseCase();

    try {
      const result = await useCase.execute(req.params.id, req.body);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}
