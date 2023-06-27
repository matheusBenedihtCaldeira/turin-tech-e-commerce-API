import { prismaClient } from '../../../infra/database/prismaClient';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
import { json } from 'node:stream/consumers';

dotenv.config();
const TOKEN = process.env.USER_SECRET_TOKEN as string;
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

    if (!passwordMatch) throw new Error('Senha invalida');
    const token = sign({}, TOKEN, {
      subject: userExists.id,
      expiresIn: '1d',
    });
    return { token };
  }
}
