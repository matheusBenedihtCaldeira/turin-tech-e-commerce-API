import { prismaClient } from '../../infra/database/prismaClient';

export class IndexOrdersUseCase {
  constructor() {}

  async execute() {
    try {
      const result = await prismaClient.order.findMany();
      return result;
    } catch (err) {
      console.error(err);
    }
  }
}
