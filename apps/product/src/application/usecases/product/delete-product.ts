import { prismaClient } from "../../../infra/database/prismaClient";

export class DeleteProductUseCase{
    constructor(){}

    async execute(id: string){
        const productExists = await prismaClient.product.findUnique({
            where: {
                id,
            },
        });
        if(!productExists){
            throw new Error('Product does not exist');
        }
        return await prismaClient.product.delete({
            where: {
                id,
            }
        })
    }
}