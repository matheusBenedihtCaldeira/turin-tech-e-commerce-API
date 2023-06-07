import { prismaClient } from "../../../infra/database/prismaClient";
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
        const product = await prismaClient.product.findFirst({
            where: {
                bar_code: data.bar_code
            }
        })
        if(product) throw new Error("Product already exists!")
        const productCreated = await prismaClient.product.create({
            data: {
                ...data
            }
        })
        console.log(productCreated);
        return productCreated
    }
}

