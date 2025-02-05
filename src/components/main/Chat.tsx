// Components
function CurrentChat({ }) {
  return (
    <div className="flex flex-row gap-[10px] justify-start p-[14px] rounded-[20px] bg-[#a6a6a6]/[0.025] cursor-pointer hover:bg-[#a6a6a6]/[0.04] active:bg-[#a6a6a6]/[0.03] ">
      <div className="w-[45px] h-[45px] bg-cover bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=')] rounded-full"></div>

      <div className="flex flex-col justify-center items-start">
        <h1 className="text-[15px] font-semibold text-white leading-5 cursor-pointer">Joe Smith</h1>
        <p className="text-[15px] font-normal text-white/[.15] leading-5 cursor-pointer">@joesmith</p>
      </div>
    </div>
  )
}

function Messages() {
  return (
    <div className="w-full h-full flex flex-col justify-end gap-1">
      {/* Recieved */}
      <div className="w-full flex flex-col gap-[4px]">
        <span className="text-[15px] text-white flex flex-row gap-[6px] leading-5 align-middle pl-2">@johndoe <span>•</span><span className="text-white/50">12:01 AM</span></span>
        <p className="px-[20px] py-[14px] text-white bg-[#a6a6a6]/[0.025] rounded-[25px] w-max max-w-[50%]">hey, joe! I’m writing because I’ve had a brand new phone</p>
      </div>

      {/* Sent */}
      <div className="w-full flex flex-col gap-[4px] items-end">
        <span className="text-[15px] flex flex-row gap-[6px] leading-5 align-middle pr-2 text-white/50">12:01 AM</span>
        <p className="px-[20px] py-[14px] text-white bg-[#1678E8]/[0.1] rounded-[25px] w-max max-w-[50%]">hey, john! I’d be happy to</p>
      </div>
    </div>);
}

function MessageInput() {
  return (
    <div className="bg-[#a6a6a6]/[0.025]  rounded-[20px] p-2 flex flex-row justify-between items-center gap-2">
      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <button className="text-white/40 h-[35px] w-[35px] rounded-[20px] flex justify-center items-center cursor-pointer hover:text-white/70 bg-[#a6a6a6]/[0.025] hover:bg-[#a6a6a6]/[0.04] active:bg-[#a6a6a6]/[0.03]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 relative left-[2px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>

        <input className="bg-transparent border-transparent outline-none leading-5 p-0 align-middle placeholder-[#3C3C43]/[0.6] font-normal text-white/95 w-full" placeholder="Type your message here" />
      </div>

      <button className="text-red-600/60 h-[35px] w-[35px] bg-[#a6a6a6]/[0.025]  rounded-[20px] flex justify-center items-center cursor-pointer  hover:bg-[#a6a6a6]/[0.04] active:bg-[#a6a6a6]/[0.03] hover:text-red-600/90 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
        </svg>
      </button>
    </div>
  )
}



export default function Chat() {
  return (
    <div className="w-[75%] h-full bg-white/[0.01] flex flex-col gap-2 p-2">
      <CurrentChat />

      <Messages />

      <MessageInput />
    </div>
  );
}





