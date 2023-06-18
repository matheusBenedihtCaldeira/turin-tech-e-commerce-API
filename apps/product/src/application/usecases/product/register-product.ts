import { prismaClient } from '../../../infra/database/prismaClient';
import { KafkaSendMessage } from '../../../infra/messaging/provider/kafka/producer';
import { gerarDescricao } from '../../models/DescriptionGenerator';
import { Product } from '../../models/Product';
type RegisterProductRequest = {
  name: string;
  price: number;
  quantity: number;
  bar_code: string;
};

export class RegisterProductUseCase {
  constructor() {}

  async execute(data: RegisterProductRequest) {
    const product = await prismaClient.product.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });
    if (product) throw new Error('Product already exists!');
    const newProduct = new Product({
      name: data.name,
      description: await gerarDescricao(data.name),
      price: data.price,
      quantity: data.quantity,
      barCode: data.bar_code,
    });
    const productCreated = await prismaClient.product.create({
      data: {
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        quantity: newProduct.quantity,
        bar_code: newProduct.barCode,
      },
    });

    const kafkaProducer = new KafkaSendMessage();
    await kafkaProducer.execute('PRODUCT_CREATED', {
      id: productCreated.id,
      name: productCreated.name,
      bar_code: productCreated.bar_code,
    });
    return productCreated;
  }
}
