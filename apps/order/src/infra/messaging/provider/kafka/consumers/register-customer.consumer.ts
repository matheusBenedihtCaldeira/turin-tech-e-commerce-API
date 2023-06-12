import { kafaConsumer } from '../kafka.consumer';

export async function registerCustomerConsumer() {
  console.log('CUSTOMER CONSUMER');
  const consumer = await kafaConsumer('CUSTOMER_CREATED');
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value?.toString();
      console.log(messageToString);
    },
  });
}

registerCustomerConsumer();
