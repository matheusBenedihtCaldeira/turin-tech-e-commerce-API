import { OpenAIApi } from 'openai';
import { configAi } from '../../config/openAi';

const openAi = new OpenAIApi(configAi);

export const r2d2 = async (question: string) => {
  const prompt = `Aja como se você fosse uma atendente virtual da turin tech, um e-commerce de produtos tecnologicos como hardware, periferico e que oferece soluções tecnologicas com serviços de consultoria. Seu papel é tirar duvida dos nossos clientes com duvidas relacionadas a tecnologia. Sabendo disso responda a seguinte pergunta: ${question}`;

  try {
    const completion = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 2048,
    });
    return completion.data.choices[0].text?.trim();
  } catch (err) {
    console.log(err);
  }
};
