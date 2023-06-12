import { prismaClient } from '../../infra/database/prismaClient';

export class DeleteCustomerUseCase {
  constructor() {}

  async execute(id: string) {
    const customerExist = await prismaClient.customer.findUnique({
      where: {
        id,
      },
    });
    if (!customerExist) throw new Error('Customer does not exist');
    return await prismaClient.customer.delete({
      where: {
        id,
      },
    });
  }
}
