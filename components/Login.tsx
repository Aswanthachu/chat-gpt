"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="w-full h-screen bg-[#75aa9c] flex justify-center items-center flex-col">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/120px-ChatGPT_logo.svg.png"
        alt="logo"
        width={300}
        height={300}
      />
      <button
        className="text-3xl text-white font-semibold animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
