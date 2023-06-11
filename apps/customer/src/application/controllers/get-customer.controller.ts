import { GetCustomerUseCase } from "../usecases/get-customer";
import { Request, Response } from "express";

export class GetCustomerController {
    
    async handle(req: Request, res: Response){
        const useCase = new GetCustomerUseCase();

        try{
            const result = await useCase.execute(req.params.id)
            console.log(result)
            return res.json(result)
        }catch(err){
            console.log(err)
            return res.status(400).json(err)
        }
    }
}