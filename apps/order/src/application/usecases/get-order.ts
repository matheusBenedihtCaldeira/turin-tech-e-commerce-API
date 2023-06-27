import { prismaClient } from '../../infra/database/prismaClient';

export class GetOrderByIdUseCase {
  constructor() {}

  async execute(id: string) {
    const orderExist = await prismaClient.order.findUnique({
      where: {
        id,
      },
    });
    if (!orderExist) throw new Error('Order not found');
    return orderExist;
  }
}
