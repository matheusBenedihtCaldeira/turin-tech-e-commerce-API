import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../usecases/user/update-user";
export class UserUpdateController {
    constructor(){}

    async handle(req: Request, res: Response){
        const useCase = new UpdateUserUseCase();

        try{
            const result = await useCase.execute(req.params.id,req.body)
            return res.json(result)
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    }
}