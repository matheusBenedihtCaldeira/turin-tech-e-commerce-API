import { prismaClient } from '../../../infra/database/prismaClient';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
const TOKEN = process.env.CUSTOMER_SECRET_TOKEN as string;
interface ICustomerRequest {
  email: string;
  password: string;
}

export class AuthenticateCustomerUseCase {
  async execute(data: ICustomerRequest) {
    const customerExist = await prismaClient.customer.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!customerExist) return console.log('Usuario não encontrado');
    const passwordMatch = await compare(data.password, customerExist.password);
    if (!passwordMatch) throw new Error('Senha invalida');
    const token = sign({}, TOKEN, {
      subject: customerExist.id,
      expiresIn: '1d',
    });
    return { token };
  }
}
