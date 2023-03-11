"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`chat/${doc.id}`);
  };
  return (
    <div
      className="flex border-gray-700 border items-center justify-start p-4 gap-4 rounded-lg cursor-pointer hover:bg-gray-700/70 transition ease-out duration-200 text-white/90"
      onClick={createNewChat}
    >
      <PlusIcon className="h-6 w-6 text-white" />
      <p className="text-lg">New Chat</p>
    </div>
  );
};

export default NewChat;
