import { prismaClient } from '../../infra/database/prismaClient';
import { Order } from '../models/Order';

type CreateOrderRequest = {
  customerId: string;
  items: {
    productId: string;
    quantity: number;
  };
};

export class CreateOrderUseCase {
  constructor() {}

  async execute(data: CreateOrderRequest) {
    const newOrder = new Order({
      customerId: data.customerId,
      items: data.items,
    });

    const order = await prismaClient.order.create({
      data: {
        customerId: newOrder.customerId,
        orderItems: {
          createMany: {
            data: newOrder.items,
          },
        },
      },
    });
    return order;
  }
}
