import { prismaClient } from '../../../infra/database/prismaClient';

export class IndexProductUseCase {
  constructor() {}

  async execute() {
    return await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        bar_code: true,
        photos: {
          select: { id: true, fileName: true },
        },
      },
    });
  }
}
