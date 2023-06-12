import { prismaClient } from "../../../infra/database/prismaClient";

export class GetUserUseCase {
  async execute(id: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) throw new Error("User not found");
    return user;
  }
}
