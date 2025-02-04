export default function ChatPage() {
  return (
    <div className="h-screen">
      {/* bg */}
      <div className="opacity-[5%] blur-[100px] -z-10 absolute w-screen h-screen bg-center bg-cover bg-no-repeat bg-[url('https://www.iclarified.com/images/news/93901/449598/449598.jpg')]"></div>

      {/* Sidebar */}
      <div className="w-[25%] h-full bg-white/[0.01] flex flex-col gap-2 p-2">
        {/* Search */}
        <div className="bg-gradient-to-r from-[#a6a6a6]/[0.01] to-[#0e0e0f] rounded-[20px] p-2 flex flex-row justify-between items-center">
          <div>
            <span>?</span>
            <input
              className="bg-transparent border-transparent outline-none placeholder-[#3C3C43]/[0.6] font-medium"
              type="search"
              placeholder="Search"
            />
          </div>
          <button className="text-green-600/50 h-[35px] w-[35px] bg-gradient-to-r from-[#a6a6a6]/[0.025] to-[#0e0e0f] rounded-[20px]">
            +
          </button>
        </div>

        {/* ChatList */}
        <div className="flex gap-2 flex-col">
          <li className="flex flex-row gap-[10px] justify-between p-2 pr-[14px] rounded-[20px] bg-gradient-to-r from-[#3F3F3F]/[0.15] to-[#404040]/[0.15]">
            <div className="flex flex-row gap-[10px]">
              {/* pic */}
              <div className="w-[45px] h-[45px]"></div>

              {/* text */}
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-semibold text-white">Name</h1>
                <p className="font-normal text-white/[.15]">
                  Lorem ipsum dolor sit ame...
                </p>
              </div>
            </div>

            {/* time */}
            <span className="text-[#B3B3B3] text-[13px]">12:32 AM</span>
          </li>
        </div>
      </div>
    </div>
  );
}
