import { Request, Response } from "express";
import { RegisterProductUseCase } from "../../usecases/product/register-product";

export class RegisterProductController {
    constructor(){}

    async handle(req: Request, res: Response){
        const useCase = new RegisterProductUseCase();

        try{
            const result = await useCase.execute(req.body)
            return res.json(result)
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    }
}