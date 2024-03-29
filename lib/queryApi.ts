import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai.createCompletion({
    model,
    prompt,
    chatId
  });
};
