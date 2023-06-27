import { Configuration } from 'openai';
require('dotenv').config();

export const configAi = new Configuration({
  apiKey: process.env.OPENAIAPIKEY,
  organization: process.env.OPENAI_ORGANIZATION,
});
