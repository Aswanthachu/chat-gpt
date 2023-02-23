import React from "react";

import { SunIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center flex-col space-y-5">
      <h1 className="text-5xl font-semibold mb-20">ChatGpt</h1>
      <div className="flex gap-6">
        <div className="flex justify-center items-center flex-col space-y-5">
          <SunIcon className="h-8 w-8 text-white" />

          <p className="text-2xl">Examples</p>

          <button className="gap-1 px-8 py-5 bg-white/5 hover:bg-gray-900 rounded-lg text-center  text-lg cursor-pointer w-[350px]">
            <p>
              {`"Explain quantum computing in simple terms"`}
              <ArrowLongRightIcon className="w-4" />
            </p>
          </button>
          <button className="flex gap-1 px-8 py-5 bg-white/5 hover:bg-gray-900 rounded-lg text-center items-center text-lg cursor-pointer">
            {`"Got any creative ideas for a 10 year old’s birthday?"`}
            <ArrowLongRightIcon className="w-4" />
          </button>
          <button className="flex gap-1 px-8 py-5 bg-white/5 hover:bg-gray-900 rounded-lg text-center items-center text-lg cursor-pointer">
            {`"How do I make an HTTP request in Javascript?"`}
            <ArrowLongRightIcon className="w-4" />
          </button>
        </div>
        <div className="flex justify-center items-center flex-col space-y-5">
          <SunIcon className="h-8 w-8 text-white" />

          <p className="text-2xl">Examples</p>

          <div className="flex gap-1 px-8 py-5 bg-white/5 rounded-lg text-center items-center text-lg ">
            {`"Explain quantum computing in simple terms"`}
            <ArrowLongRightIcon className="w-4" />
          </div>
          <div className="flex gap-1 px-8 py-5 bg-white/5 rounded-lg text-center items-center text-lg ">
            {`"Explain quantum computing in simple terms"`}
            <ArrowLongRightIcon className="w-4" />
          </div>
          <div className="flex gap-1 px-8 py-5 bg-white/5 rounded-lg text-center items-center text-lg ">
            {`"Explain quantum computing in simple terms"`}
            <ArrowLongRightIcon className="w-4" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-5">
          <SunIcon className="h-8 w-8 text-white" />
          {/* SunIcon */}
          <p className="text-2xl">Examples</p>

          <div className="flex gap-1 px-8 py-5 bg-white/5 rounded-lg text-center items-center text-lg ">
            {`"Explain quantum computing in simple terms"`}
            <ArrowLongRightIcon className="w-4" />
          </div>
          <div className="flex gap-1 px-8 py-5 bg-white/5 rounded-lg text-center items-center text-lg ">
            {`"Explain quantum computing in simple terms"`}
            <ArrowLongRightIcon className="w-4" />
          </div>
          <div className="flex gap-1 px-8 py-5 bg-white/5 rounded-lg text-center items-center text-lg ">
            {`"Explain quantum computing in simple terms"`}
            <ArrowLongRightIcon className="w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
