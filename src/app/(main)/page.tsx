export default function ChatPage() {
  return (
    <div className="h-screen flex gap-2">
      {/* bg */}
      <div className="opacity-[5%] blur-[100px] -z-10 absolute w-screen h-screen bg-center bg-cover bg-no-repeat bg-[url('https://www.iclarified.com/images/news/93901/449598/449598.jpg')]"></div>

      {/* Sidebar */}
      <div className="w-[25%] h-full bg-white/[0.01] flex flex-col gap-2 p-2">
        {/* Search */}
        <div className="bg-gradient-to-r from-[#a6a6a6]/[0.01] to-[#0e0e0f] rounded-[20px] p-2 flex flex-row justify-between items-center gap-2">
          <div className="flex flex-row justify-between items-center gap-2 w-full">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 text-white/40 p-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>

            <input
              className="bg-transparent border-transparent outline-none leading-5 p-0 align-middle placeholder-[#3C3C43]/[0.6] font-normal text-white/95 w-full"
              placeholder="Search"
            />
          </div>

          <button className="text-green-600/60 h-[35px] w-[35px] bg-gradient-to-r from-[#a6a6a6]/[0.025] to-[#0e0e0f] rounded-[20px] flex justify-center items-center cursor-pointer  hover:text-green-600/90 hover:from-[#a6a6a6]/[0.05] duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        {/* ChatList */}
        <div className="flex gap-2 flex-col h-full">
          <li className="flex flex-row gap-[10px] justify-between p-2 pr-[14px] rounded-[20px] bg-gradient-to-r from-[#3F3F3F]/[0.15] to-[#404040]/[0.15]">
            <div className="flex flex-row gap-[10px]">
              {/* pic */}
              <div className="w-[45px] h-[45px] bg-cover bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=')] rounded-full"></div>

              {/* text */}
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-[15px] font-semibold text-white leading-5">
                  Joe Smith
                </h1>
                <p className="text-[15px] font-normal text-white/[.15] leading-5">
                  Lorem ipsum dolor sit ame...
                </p>
              </div>
            </div>

            {/* time */}
            <span className="text-[#B3B3B3] text-[13px]">12:32 AM</span>
          </li>
        </div>

        {/* Current User */}
        <div className="flex justify-self-end flex-row gap-[10px] justify-between items-center p-2 pr-[14px] rounded-[20px] bg-gradient-to-r from-[#3F3F3F]/[0.15] to-[#404040]/[0.15]">
          <div className="flex flex-row gap-[10px]">
            {/* pic */}
            <div className="w-[55px] h-[55px] bg-cover bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=')] rounded-full"></div>

            {/* text */}
            <div className="flex flex-col justify-center items-start">
              <div className="flex gap-2 align-middle">
                <h1 className="text-[18px] font-semibold text-white leading-5">
                  Joe Smith
                </h1>
                <span className="text-white leading-5 text-[18px]">•</span>

                <span className="text-white/50 leading-5 text-[15px]">
                  2990 C
                </span>
              </div>
              <p className="text-[15px] font-normal text-white/[.15] leading-5">
                Lorem ipsum dolor sit ame...
              </p>
            </div>
          </div>

          {/* settings */}
          <button className="text-white/40 h-[35px] w-[35px] bg-gradient-to-r from-[#a6a6a6]/[0.025] to-[#0e0e0f] rounded-[20px] flex justify-center items-center cursor-pointer  hover:text-white/70 hover:from-[#a6a6a6]/[0.05] duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-[75%] h-full bg-white/[0.01] flex flex-col gap-2 p-2">
        {/* Chat Name */}
        <div className="flex flex-row gap-[10px] justify-start p-[14px] rounded-[20px] bg-gradient-to-r from-[#a6a6a6]/[0.01] to-[#0e0e0f]">
          {/* pic */}
          <div className="w-[45px] h-[45px] bg-cover bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=')] rounded-full"></div>

          {/* text */}
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[15px] font-semibold text-white leading-5">
              Joe Smith
            </h1>
            <p className="text-[15px] font-normal text-white/[.15] leading-5">
              @joesmith
            </p>
          </div>
        </div>

        {/* Chat Field */}
        <div className="w-full h-full flex flex-col justify-end gap-1">
          {/* Recieved */}
          <div className="w-full flex flex-col gap-[4px]">
            <span className="text-[15px] text-white flex flex-row gap-[6px] leading-5 align-middle pl-2">
              @johndoe <span>•</span>
              <span className="text-white/50">12:01 AM</span>
            </span>
            <p className="px-[20px] py-[14px] text-white bg-gradient-to-r from-[#3F3F3F]/[0.15] to-[#404040]/[0.15] rounded-[25px] w-max max-w-[50%]">
              hey, joe! I’m writing because I’ve had a brand new phone
            </p>
          </div>

          {/* Sent */}
          <div className="w-full flex flex-col gap-[4px] items-end">
            <span className="text-[15px] flex flex-row gap-[6px] leading-5 align-middle pr-2 text-white/50">
              12:01 AM
            </span>
            <p className="px-[20px] py-[14px] text-white bg-gradient-to-r from-[#1678E8]/[0.15] to-[#1A4677]/[0.15] rounded-[25px] w-max max-w-[50%]">
              hey, john! I’d be happy to
            </p>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-gradient-to-r from-[#a6a6a6]/[0.01] to-[#0e0e0f] rounded-[20px] p-2 flex flex-row justify-between items-center gap-2">
          <div className="flex flex-row justify-between items-center gap-2 w-full">
            <button className="text-[#616169]/60 h-[35px] w-[35px] bg-gradient-to-r from-[#a6a6a6]/[0.025] to-[#0e0e0f] rounded-[20px] flex justify-center items-center cursor-pointer  hover:text-[#616169]/90 hover:from-[#a6a6a6]/[0.05] duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-4 relative left-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>

            <input
              className="bg-transparent border-transparent outline-none leading-5 p-0 align-middle placeholder-[#3C3C43]/[0.6] font-normal text-white/95 w-full"
              placeholder="Type your message here"
            />
          </div>

          <button className="text-red-600/60 h-[35px] w-[35px] bg-gradient-to-r from-[#a6a6a6]/[0.025] to-[#0e0e0f] rounded-[20px] flex justify-center items-center cursor-pointer  hover:text-red-600/90 hover:from-[#a6a6a6]/[0.05] duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
