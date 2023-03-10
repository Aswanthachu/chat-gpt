import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <div className="flex border-gray-700 border items-center justify-start p-4 gap-4 rounded-lg cursor-pointer hover:bg-gray-700/70 transition ease-out duration-200 text-white/90">
      <PlusIcon className="h-6 w-6 text-white"/>
      <p className="text-lg">New Chat</p>
    </div>
  );
};

export default NewChat;
