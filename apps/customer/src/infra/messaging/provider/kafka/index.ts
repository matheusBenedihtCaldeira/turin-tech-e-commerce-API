import { Kafka } from 'kafkajs';
import dotenv from 'dotenv';
dotenv.config();

const KAFKA_USERNAME = process.env.KAFKA_USERNAME as string;
const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD as string;
const kafka = new Kafka({
  brokers: ['fun-sheepdog-11334-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: KAFKA_USERNAME,
    password: KAFKA_PASSWORD,
  },
  ssl: true,
});

export { kafka };
