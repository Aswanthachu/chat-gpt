import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`w-full flex items-center px-2 py-5 ${
        active ? "bg-gray-700/50" : "hover:bg-gray-700/20"
      }  text-white/90 justify-between rounded-lg`}
    >
      <div className="flex items-center gap-4">
        <ChatBubbleLeftIcon className="h-6 w-6 " />
        {messages?.docs[messages?.docs.length - 1]?.data()?.text || "New Chat"}
      </div>
      <TrashIcon onClick={removeChat} className="h-6 w-6" />
    </Link>
  );
};

export default ChatRow;
