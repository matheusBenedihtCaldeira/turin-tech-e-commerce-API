import { prismaClient } from '../../../infra/database/prismaClient';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';

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
    if (!passwordMatch) return console.log('Senha incorreta');
    const token = sign({}, '0e9f655d-198d-47e7-94fc-abc6ff5d4a62', {
      subject: customerExist.id,
      expiresIn: '1d',
    });
    return { token };
  }
}
