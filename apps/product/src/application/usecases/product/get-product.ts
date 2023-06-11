import { prismaClient } from "../../../infra/database/prismaClient";

export class GetProductUseCase {
    async execute(id: string){
        const product = await prismaClient.product.findUnique({
            where: {
                id,
            }
        })
        if(!product) throw new Error("Product not found")
        return product
    }
}