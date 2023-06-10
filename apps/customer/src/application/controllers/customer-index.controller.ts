import { Request, Response } from "express";
import { IndexCustomerUseCase } from "../usecases/index-customer";

export class IndexCustomerController {
    constructor(){}

    async handle(req: Request, res: Response){
        const useCase = new IndexCustomerUseCase();

        try{
            const result = await useCase.execute();
            return res.json(result);
        }catch(err){
            console.log(err)
            return res.status(404).json(err)
        }
    }
}