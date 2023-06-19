import { EachMessagePayload } from 'kafkajs';
import { kafka } from '..';
import { prismaClient } from '../../../../database/prismaClient';

const consumer = kafka.consumer({ groupId: 'ORDER_APP' });

type CustomerConsumer = {
  email: string;
  password: string;
};

type UserConsumer = {
  key: string;
  password: string;
};
const runConsumer = async () => {
  await consumer.connect();
  console.log('CONSUMER');
  await consumer.subscribe({ topic: 'CUSTOMER_CREATED' });
  await consumer.subscribe({ topic: 'USER_CREATED' });

  await consumer.run({
    eachMessage: async (payload: EachMessagePayload) => {
      const message = payload.message.value!.toString();

      console.log(`MESSSAGE: ${message}`);
      if (payload.topic === 'CUSTOMER_CREATED') {
        const customer = JSON.parse(message) as CustomerConsumer;
        console.log(customer);
      } else if (payload.topic === 'USER_CREATED') {
        const user = JSON.parse(message) as UserConsumer;
        try {
          await prismaClient.user.create({
            data: {
              key: user.key,
              password: user.password,
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
