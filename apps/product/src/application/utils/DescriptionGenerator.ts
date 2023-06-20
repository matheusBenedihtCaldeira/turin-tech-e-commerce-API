import { OpenAIApi } from 'openai';
import { configAi } from '../../config/openAi';
const openAi = new OpenAIApi(configAi);

export const generateDescription = async (nomeDoProduto: string) => {
  const prompt = `Gere a descrição do seguinte produto, ${nomeDoProduto}`;

  try {
    const completion = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 2048,
    });
    return completion.data.choices[0].text?.trim();
  } catch (error) {
    console.log(error);
  }
};
