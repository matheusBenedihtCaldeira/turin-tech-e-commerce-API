import { User } from "../../models/User";
import { prismaClient } from "../../../infra/database/prismaClient";

type RegisterUserRequest = {
  name: string;
  lastName: string;
  key: string;
  password: string;
};

export class RegisterUserUseCase {
  constructor() {}

  async execute({ name, lastName, key, password }: RegisterUserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        key: key,
      },
    });
    if (user) throw new Error("User already exists");
    const novoUser = new User({
      name,
      lastName,
      key,
      password,
    });
    const userRegistred = await prismaClient.user.create({
      data: {
        name: novoUser.name,
        lastName: novoUser.lastName,
        key: novoUser.key,
        password: novoUser.password,
      },
    });
    console.log(userRegistred);
    return userRegistred;
  }
}
