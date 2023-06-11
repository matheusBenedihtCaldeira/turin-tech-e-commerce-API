import { prismaClient } from "../../infra/database/prismaClient";

export class GetCustomerUseCase {
    async execute(id: string){
        return await prismaClient.customer.findUnique({
            where: {
                id
            }
        })
    }
}