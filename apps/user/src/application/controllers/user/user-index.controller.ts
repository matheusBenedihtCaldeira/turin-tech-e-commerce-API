import { Request, Response } from "express";
import { IndexUserUseCase } from "../../usecases/user/index-user";

export class UserIndexController {
    constructor(){}

    async handle(req: Request, res: Response){
        const useCase = new IndexUserUseCase();

        try{
            const result = await useCase.execute();
            return res.json(result)
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    }
}