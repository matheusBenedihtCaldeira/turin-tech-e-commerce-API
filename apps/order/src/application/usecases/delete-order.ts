import { prismaClient } from '../../infra/database/prismaClient';

export class DeleteOrderUserCase {
  constructor() {}

  async execute(id: string) {
    const orderExist = await prismaClient.order.findUnique({
      where: {
        id,
      },
    });
    if (!orderExist) {
      throw new Error('Order does not exist');
    }
    return await prismaClient.order.delete({
      where: {
        id,
      },
    });
  }
}
