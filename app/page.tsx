import React from "react";

import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col space-y-5 px-3 py-12 ">
      <h1 className="w-full text-center text-5xl font-semibold m-10 lg:mb-32 ">
        ChatGpt
      </h1>
      <div className="flex justify-evenly gap-4 items-start w-full flex-wrap space-y-16 lg:space-y-0">
        <div className="flex justify-center items-center flex-col space-y-5 ">
          <SunIcon className="h-8 w-8 text-white" />

          <p className="text-lg lg:text-2xl">Examples</p>

          <button className="gap-1 px-8 py-5 bg-white/5 hover:bg-gray-900 rounded-lg text-center  text-md lg:text-lg  cursor-pointer md:min-w-[550px] lg:min-w-[350px] lg:max-w-[350px]">
            <p className="">{`"Explain quantum computing in simple terms"`}→</p>
          </button>
          <button className="gap-1 px-8 py-5 bg-white/5 hover:bg-gray-900 rounded-lg text-center items-center text-md lg:text-lg cursor-pointer md:min-w-[550px] lg:min-w-[350px] lg:max-w-[350px]">
            {`"Got any creative ideas for a 10 year old’s birthday?"`}→
          </button>
          <button className=" gap-1 px-8 py-5 bg-white/5 hover:bg-gray-900 rounded-lg text-center items-center text-md lg:text-lg cursor-pointer md:min-w-[550px] lg:min-w-[350px] lg:max-w-[350px]">
            {`"How do I make an HTTP request in Javascript?"`}→
          </button>
        </div>

        <div className="flex justify-center items-center flex-col space-y-5">
          <BoltIcon className="h-8 w-8 text-white" />

          <p className="text-lg lg:text-2xl">Capabilities</p>

          <div className="infoText">
            {`"Remembers what user said earlier in the conversation"`}
          </div>
          <div className="infoText">
            {`"Allows user to provide follow-up corrections"`}
          </div>
          <div className="infoText">
            {`"Trained to decline inappropriate requests"`}
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-5">
          <ExclamationTriangleIcon className="h-8 w-8 text-white" />

          <p className="text-lg lg:text-2xl">Limitations</p>

          <div className="infoText">
            {`"May occasionally generate incorrect information"`}
          </div>
          <div className="infoText">
            {`"May occasionally produce harmful instructions or biased content"`}
          </div>
          <div className="infoText">
            {`"Limited knowledge of world and events after 2021"`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
