import { User } from '../../models/User';
import { prismaClient } from '../../../infra/database/prismaClient';
import { passwordHash } from '../../utils/passwordHash';

type RegisterUserRequest = {
  name: string;
  lastName: string;
  key: string;
  password: string;
};

export class RegisterUserUseCase {
  constructor() {}

  async execute(data: RegisterUserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        key: data.key,
      },
    });
    if (user) throw new Error('User already exists');
    const novoUser = new User({
      name: data.name,
      lastName: data.lastName,
      key: data.key,
      password: await passwordHash(data.password),
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
