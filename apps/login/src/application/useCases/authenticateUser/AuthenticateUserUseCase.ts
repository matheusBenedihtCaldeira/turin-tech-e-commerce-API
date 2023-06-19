import { prismaClient } from '../../../infra/database/prismaClient';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';

interface IUserRequest {
  key: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute(data: IUserRequest) {
    const userExists = await prismaClient.user.findFirst({
      where: {
        key: data.key,
      },
    });
    if (!userExists) return console.log('usuario invalido');
    const passwordMatch = await compare(data.password, userExists.password);

    if (!passwordMatch) return console.log('Senha invalida');
    const token = sign({}, '0e9f655d-198d-47e7-94fc-abc6ff5d4a62', {
      subject: userExists.id,
      expiresIn: '1d',
    });
    return { token };
  }
}
