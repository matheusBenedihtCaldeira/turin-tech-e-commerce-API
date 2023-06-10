import { prismaClient} from "../../infra/database/prismaClient";

type UpdateCustomerRequest = {
    name: string
    lastName: string
    email: string
    senha: string
}

export class UpdateCustomerUseCase {
    constructor(){}

    async execute(id: string, data: UpdateCustomerRequest){
        const customerExist = await prismaClient.customer.findUnique({
            where: {
                id,
            }
        })
        if(!customerExist) throw new Error("Customer does not exist")
        return await prismaClient.customer.update({
            data,
            where:{
                id,
            }
        })
    }
}