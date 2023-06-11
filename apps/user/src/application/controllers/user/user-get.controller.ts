import { GetUserUseCase } from "../../usecases/user/get-user";
import { Request, Response } from "express";

export class GetUserController {
    async handle(req: Request, res: Response){
        const useCase = new GetUserUseCase
        try{
            const result = await useCase.execute(req.params.id)
            return res.json(result);
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    }
}