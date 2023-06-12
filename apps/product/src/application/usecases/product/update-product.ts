import { prismaClient } from "../../../infra/database/prismaClient";
type UpdateProductRequest = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  bar_code: string;
  createdAt: Date;
};

export class UpdateProductUseCase {
  constructor() {}

  async execute(id: string, data: UpdateProductRequest) {
    const productExist = await prismaClient.product.findUnique({
      where: {
        id,
      },
    });
    if (!productExist) {
      throw new Error("Product does not exist");
    }

    return await prismaClient.product.update({
      data,
      where: {
        id,
      },
    });
  }
}
