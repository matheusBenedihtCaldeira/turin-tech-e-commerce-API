import { User } from "../models/User";
import { prismaClient } from "../../infra/database/prismaClient";

type RegisterUserRequest = {
    name: string
    lastName: string
    key: string
    password: string
}

export class RegisterUserUseCase {
    constructor(){}

    async execute({name, lastName, key,password}: RegisterUserRequest){
        const userRegistred = await prismaClient.user.create({
            data: {
                name: name,
                lastName: lastName,
                key: key,
                password: password
              }
        })
        console.log(userRegistred)
        return userRegistred
    }
}