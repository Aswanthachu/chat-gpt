"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden md:flex w-[25vw] lg:w-[20vw] p-2 lg:p-4 bg-[#202123] flex-col items-center h-screen">
      <div className="flex-1 w-full">
        <NewChat />
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
