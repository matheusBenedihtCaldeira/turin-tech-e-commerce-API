import { Request, Response } from "express";
import { GetProductUseCase } from "../../usecases/product/get-product";

export class GetProductController {
  async handle(req: Request, res: Response) {
    const useCase = new GetProductUseCase();

    try {
      const result = await useCase.execute(req.params.id);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}
