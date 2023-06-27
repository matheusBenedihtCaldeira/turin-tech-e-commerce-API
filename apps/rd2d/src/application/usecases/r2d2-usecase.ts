import { r2d2 } from '../utils/chatGPT';

type IQuestionRequest = {
  question: string;
};

export class R2d2UseCase {
  constructor() {}

  async execute(data: IQuestionRequest) {
    const answer = await r2d2(data.question);
    return answer;
  }
}
