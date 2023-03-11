"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats, loading, error);

  return (
    <div className="hidden md:flex w-[25vw] lg:w-[20vw] p-2 lg:p-4 bg-[#202123] flex-col items-center h-screen">
      <div className="flex-1 w-full">
        <NewChat />
        <div className="overflow-y-auto my-2 h-[50vh]">
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image!}
          alt="profile pic"
          className="flex w-20 h-20 rounded-full"
          onClick={() => signOut()}
        />
      )}
    </div>
  );
};

export default SideBar;
