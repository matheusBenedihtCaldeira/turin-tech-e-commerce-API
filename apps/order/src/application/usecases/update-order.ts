import { prismaClient } from '../../infra/database/prismaClient';

type UpdateOrderRequest = {
  customerId: string;
  items: {
    productId: string;
    quantity: number;
  };
};

export class UpdateOrderUseCase {
  constructor() {}

  async execute(id: string, data: UpdateOrderRequest) {
    const orderExist = await prismaClient.order.findUnique({
      where: {
        id,
      },
    });
    if (!orderExist) throw new Error('Order does not exist');
    return await prismaClient.order.update({
      data,
      where: {
        id,
      },
    });
  }
}
