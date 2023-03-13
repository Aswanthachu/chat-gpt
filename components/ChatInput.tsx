"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { db } from "../firebase";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [question, setQuestion] = useState("");

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!question) return;

    const input = question.trim();
    setQuestion("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    await fetch('api/askQuestion')
  };

  return (
    <div className="mx-[10%]">
      <form
        onSubmit={sendMessage}
        className="w-full h-[60px] flex items-center text-black  text-xl bg-gray-700/50 rounded-xl pr-2"
      >
        <input
          value={question}
          type="text"
          onChange={(e) => setQuestion(e.target.value)}
          className="outline-none hover:outline-none active:outline-none h-full w-full  bg-gray-700/50 px-5 rounded-bl-xl rounded-tl-xl text-white"
          disabled={!session}
        />
        <button type="submit" disabled={!question || !session} className="mx-2">
          <PaperAirplaneIcon className="w-6 h-6 text-white/40 bg-gray-700/50 -rotate-45" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
