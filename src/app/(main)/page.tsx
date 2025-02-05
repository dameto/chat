import Chat from "@/components/main/Chat";
import Sidebar from "@/components/main/Sidebar";

export default function ChatPage() {
  return (
    <div className="h-screen flex gap-2">
      {/* bg */}
      <div className="opacity-[5%] blur-[100px] -z-10 absolute w-screen h-screen bg-center bg-cover bg-no-repeat bg-[url('https://www.iclarified.com/images/news/93901/449598/449598.jpg')]"></div>

      <Sidebar />
      <Chat />
    </div>
  );
}
