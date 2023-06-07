import { prismaClient } from "../../infra/database/prismaClient";
type RegisterProductRequest={
    name: string;
    description: string;
    price: number;
    quantity: number;
    bar_code: string;
    createdAt: Date;
}

export class RegisterProductUseCase{
    constructor(){}

    async execute(data: RegisterProductRequest){
        const productCreated = await prismaClient.product.create({
            data: {
                ...data
            }
        })
    }
}