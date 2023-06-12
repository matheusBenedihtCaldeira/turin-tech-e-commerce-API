import { prismaClient } from "../../../infra/database/prismaClient";

export class IndexProductUseCase {
  constructor() {}

  async execute() {
    return await prismaClient.product.findMany();
  }
}
