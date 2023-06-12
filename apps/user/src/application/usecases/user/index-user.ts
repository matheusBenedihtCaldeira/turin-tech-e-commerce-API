import { prismaClient } from "../../../infra/database/prismaClient";

export class IndexUserUseCase {
  constructor() {}

  async execute() {
    return await prismaClient.user.findMany();
  }
}
