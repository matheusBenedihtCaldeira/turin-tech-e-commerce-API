import { prismaClient } from '../../../infra/database/prismaClient';

export class GetProductUseCase {
  async execute(id: string) {
    const product = await prismaClient.product.findUnique({
      where: {
        id,
      },
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
    if (!product) throw new Error('Product not found');
    return product;
  }
}
