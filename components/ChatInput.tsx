"use client";
import { useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [question, setQuestion] = useState("");
  console.log(question);

  return (
    <div>
      <form action="">
        <input
          value={question}
          type="text"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatInput;
