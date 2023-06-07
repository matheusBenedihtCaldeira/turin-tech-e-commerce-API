import { Request, Response } from "express";
import { DeleteProductUseCase } from "../../usecases/product/delete-product";
export class DeleteProductController {
    constructor(){}

    async handle(req: Request, res: Response){
        const useCase = new DeleteProductUseCase();

        try{
            const result = await useCase.execute(req.params.id)
            return res.json(result)
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    }
}