import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "please provide a prompt" });
  }
  if (!chatId) {
    res.status(400).json({ answer: "plase provide a chatId" });
  }

  const response = await query(prompt, chatId, model, session);
  res.status(200).json({ answer: "John Doe" });
}
