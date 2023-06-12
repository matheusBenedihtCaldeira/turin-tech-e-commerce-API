import { prismaClient } from "../../../infra/database/prismaClient";

type UpdateUserRequest = {
  name: string;
  lastName: string;
  key: string;
  password: string;
};

export class UpdateUserUseCase {
  constructor() {}

  async execute(id: string, data: UpdateUserRequest) {
    const userExist = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    if (!userExist) {
      throw new Error("User does not exist");
    }
    return await prismaClient.user.update({
      data,
      where: {
        id,
      },
    });
  }
}
