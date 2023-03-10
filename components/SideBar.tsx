import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className="hidden md:block w-[25vw] lg:w-[20vw] p-2 lg:p-4 bg-[#202123]">
        <NewChat />
    </div>
  )
}

export default SideBar;