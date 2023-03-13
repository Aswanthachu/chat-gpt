import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

const chatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between w-full py-10">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default chatPage;
