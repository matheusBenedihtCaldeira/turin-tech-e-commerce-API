import { prismaClient } from "../../../infra/database/prismaClient";

export class DeleteUserUseCase {
  constructor() {}

  async execute(id: string) {
    const userExist = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    if (!userExist) {
      throw new Error("User does not exist");
    }
    return await prismaClient.user.delete({
      where: {
        id,
      },
    });
  }
}
