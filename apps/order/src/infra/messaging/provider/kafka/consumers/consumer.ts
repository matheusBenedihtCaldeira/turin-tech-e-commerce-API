import { EachMessagePayload } from 'kafkajs';
import { prismaClient } from '../../../../database/prismaClient';
import { kafka } from '..';

const consumer = kafka.consumer({ groupId: 'ORDER_APP' });

type CustomerConsumer = {
  email: string;
  id: string;
};

type ProductConsumer = {
  id: string;
  name: string;
  bar_code: string;
};
const runConsumer = async () => {
  await consumer.connect();
  console.log('CONSUMER');
  await consumer.subscribe({ topic: 'CUSTOMER_CREATED' });
  await consumer.subscribe({ topic: 'PRODUCT_CREATED' });

  await consumer.run({
    eachMessage: async (payload: EachMessagePayload) => {
      const message = payload.message.value!.toString();

      console.log(`MESSSAGE: ${message}`);
      if (payload.topic === 'CUSTOMER_CREATED') {
        const customer = JSON.parse(message) as CustomerConsumer;
        try {
          await prismaClient.customer.create({
            data: {
              exeternalId: customer.id,
              email: customer.email,
            },
          });
        } catch (err) {
          console.log(err);
        }
      } else if (payload.topic === 'PRODUCT_CREATED') {
        const product = JSON.parse(message) as ProductConsumer;
        try {
          await prismaClient.product.create({
            data: {
              name: product.name,
              exeternalId: product.id,
              bar_code: product.bar_code,
            },
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  });
};

runConsumer().catch((error) => {
  console.error('Erro no consumer:', error);
});
