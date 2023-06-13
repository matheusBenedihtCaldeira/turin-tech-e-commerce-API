import { kafka } from '.';

export const kafkaConsumer = async (topic: string) => {
  const consumer = await kafka.consumer({ groupId: 'ORDER_APP' });
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });
  return consumer;
};
