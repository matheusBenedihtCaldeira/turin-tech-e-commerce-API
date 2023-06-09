import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../usecases/user/delete-user";
export class UserDeleteController {
    constructor(){}

    async handle(req: Request, res: Response){
        const useCase = new DeleteUserUseCase();

        try{
            const result = await useCase.execute(req.params.id)
            return res.json({
                "Status": "User deleted",
                "User": result
            })
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    }
}