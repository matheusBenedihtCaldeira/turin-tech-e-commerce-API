import { Kafka } from "kafkajs";


const kafka = new Kafka({
    brokers: ['fun-sheepdog-11334-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'ZnVuLXNoZWVwZG9nLTExMzM0JMOp3aflfWjISfAFuVHtd8NQeM_JZwj_PfEkHNU',
      password: 'e93058a513ed4959bb249aab905b60f3',
    },
    ssl: true,
  })

export {kafka}