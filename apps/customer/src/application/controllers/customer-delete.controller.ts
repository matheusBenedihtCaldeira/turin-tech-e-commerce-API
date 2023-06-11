import { DeleteCustomerUseCase} from "../usecases/delete-customer";
import { Request, Response } from "express";
export class DeleteCustomerController {
    
    async handle(req: Request, res: Response){
        const useCase = new DeleteCustomerUseCase();

        try{
            const result = await useCase.execute(req.params.id);
            return res.json(result);
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    } 
}