import { prismaClient } from '../../../../database/prismaClient';
import { kafkaConsumer } from '../kafka.consumer';

type ProductConsumer = {
  id: string;
  externalId: string;
  bar_code: string;
};

export async function registerProductConsumer() {
  console.log('PRODUCT CONSUMER');
  const consumer = await kafkaConsumer('PRODUCT_CREATED');
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString();
      console.log(messageToString);
    },
  });
}

registerProductConsumer();
