import { prismaClient } from '../../infra/database/prismaClient';

export class IndexCustomerUseCase {
  constructor() {}

  async execute() {
    return await prismaClient.customer.findMany();
  }
}
