export default function Test() {
  return (
    <div
      data-layer="Sidebar"
      className="Sidebar w-[475px] h-[1080px] p-2 bg-white/0 flex-col justify-start items-start gap-4 inline-flex"
    >
      <div
        data-layer="Search Field"
        className="SearchField self-stretch px-2 py-[7px] bg-gradient-to-r from-[#a5a5a5] to-[#18181a] rounded-[20px] justify-start items-center gap-2 inline-flex"
      >
        <div
          data-layer="Search Glyph"
          className="SearchGlyph w-[25px] text-[#3c3c43]/60 text-[17px] font-normal font-['SF Pro'] leading-snug"
        >
          􀊫
        </div>
        <div
          data-layer="Placeholder Label"
          className="PlaceholderLabel grow shrink basis-0 h-[22px] text-[#3c3c43]/60 text-[17px] font-normal font-['Roboto'] leading-snug"
        >
          Search
        </div>
        <div
          data-layer="Add Friend"
          className="AddFriend pl-[11px] pr-2.5 py-[9px] bg-gradient-to-r from-[#a5a5a5] to-[#18181a] rounded-[20px] justify-center items-center flex"
        >
          <div
            data-layer="+"
            className="text-[#7c9d54]/60 text-2xl font-normal font-['Roboto'] leading-[17px]"
          >
            +
          </div>
        </div>
      </div>
      <div
        data-layer="ChatList"
        className="Chatlist self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex"
      >
        <div
          data-layer="Chat"
          className="Chat self-stretch pl-2 pr-3.5 py-2 bg-gradient-to-r from-[#3e3e3e] to-neutral-700 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
        >
          <div
            data-layer="App Icon"
            className="AppIcon w-[45px] h-[45px] rounded-[25px] justify-center items-center flex overflow-hidden"
          >
            <img
              data-layer="No App Icon"
              className="NoAppIcon w-[45px] h-[45px]"
              src="https://via.placeholder.com/45x45"
            />
          </div>
          <div
            data-layer="Title, Time and Description"
            className="TitleTimeAndDescription grow shrink basis-0 h-10 flex-col justify-start items-start inline-flex"
          >
            <div
              data-layer="Title and Time"
              className="TitleAndTime self-stretch justify-start items-start gap-4 inline-flex"
            >
              <div
                data-layer="Title"
                className="Title grow shrink basis-0 text-white text-[15px] font-semibold font-['Roboto'] leading-tight"
              >
                John Doe
              </div>
              <div
                data-layer="Time"
                className="Time pl-[18px] justify-end items-center flex"
              >
                <div
                  data-layer="Time"
                  className="Time text-right text-[#b3b3b3] text-[13px] font-normal font-['Roboto Condensed'] leading-tight"
                >
                  9:41 AM
                </div>
              </div>
            </div>
            <div
              data-layer="Title"
              className="Title w-[306px] grow shrink basis-0 text-white/30 text-[15px] font-normal font-['Roboto'] leading-tight"
            >
              hey, joe! I’m writing because I’ve had a bran...
            </div>
          </div>
        </div>
        <div
          data-layer="Chat"
          className="Chat self-stretch pl-2 pr-3.5 py-2 bg-gradient-to-r from-[#3e3e3e] to-neutral-700 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
        >
          <div
            data-layer="App Icon"
            className="AppIcon w-[45px] h-[45px] rounded-[25px] justify-center items-center flex overflow-hidden"
          >
            <img
              data-layer="No App Icon"
              className="NoAppIcon w-[45px] h-[45px]"
              src="https://via.placeholder.com/45x45"
            />
          </div>
          <div
            data-layer="Title, Time and Description"
            className="TitleTimeAndDescription grow shrink basis-0 h-10 flex-col justify-start items-start inline-flex"
          >
            <div
              data-layer="Title and Time"
              className="TitleAndTime self-stretch justify-start items-start gap-4 inline-flex"
            >
              <div
                data-layer="Title"
                className="Title grow shrink basis-0 text-white text-[15px] font-semibold font-['Roboto'] leading-tight"
              >
                Joe Stone
              </div>
              <div
                data-layer="Time"
                className="Time pl-[18px] justify-end items-center flex"
              >
                <div
                  data-layer="Time"
                  className="Time text-right text-[#b3b3b3] text-[13px] font-normal font-['Roboto Condensed'] leading-tight"
                >
                  9:41 AM
                </div>
              </div>
            </div>
            <div
              data-layer="Title"
              className="Title w-[306px] grow shrink basis-0 text-white/30 text-[15px] font-normal font-['Roboto'] leading-tight"
            >
              hey, joe! I’m writing because I’ve had a bran...
            </div>
          </div>
        </div>
        <div
          data-layer="Chat"
          className="Chat self-stretch pl-2 pr-3.5 py-2 bg-gradient-to-r from-[#3e3e3e] to-neutral-700 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
        >
          <div
            data-layer="App Icon"
            className="AppIcon w-[45px] h-[45px] rounded-[25px] justify-center items-center flex overflow-hidden"
          >
            <img
              data-layer="No App Icon"
              className="NoAppIcon w-[45px] h-[45px]"
              src="https://via.placeholder.com/45x45"
            />
          </div>
          <div
            data-layer="Title, Time and Description"
            className="TitleTimeAndDescription grow shrink basis-0 h-10 flex-col justify-start items-start inline-flex"
          >
            <div
              data-layer="Title and Time"
              className="TitleAndTime self-stretch justify-start items-start gap-4 inline-flex"
            >
              <div
                data-layer="Title"
                className="Title grow shrink basis-0 text-white text-[15px] font-semibold font-['Roboto'] leading-tight"
              >
                Jamal Mali
              </div>
              <div
                data-layer="Time"
                className="Time pl-[18px] justify-end items-center flex"
              >
                <div
                  data-layer="Time"
                  className="Time text-right text-[#b3b3b3] text-[13px] font-normal font-['Roboto Condensed'] leading-tight"
                >
                  9:41 AM
                </div>
              </div>
            </div>
            <div
              data-layer="Title"
              className="Title w-[306px] grow shrink basis-0 text-white/30 text-[15px] font-normal font-['Roboto'] leading-tight"
            >
              hey, joe! I’m writing because I’ve had a bran...
            </div>
          </div>
        </div>
        <div
          data-layer="Chat"
          className="Chat self-stretch pl-2 pr-3.5 py-2 bg-gradient-to-r from-[#3e3e3e] to-neutral-700 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
        >
          <div
            data-layer="App Icon"
            className="AppIcon w-[45px] h-[45px] rounded-[25px] justify-center items-center flex overflow-hidden"
          >
            <img
              data-layer="No App Icon"
              className="NoAppIcon w-[45px] h-[45px]"
              src="https://via.placeholder.com/45x45"
            />
          </div>
          <div
            data-layer="Title, Time and Description"
            className="TitleTimeAndDescription grow shrink basis-0 h-10 flex-col justify-start items-start inline-flex"
          >
            <div
              data-layer="Title and Time"
              className="TitleAndTime self-stretch justify-start items-start gap-4 inline-flex"
            >
              <div
                data-layer="Title"
                className="Title grow shrink basis-0 text-white text-[15px] font-semibold font-['Roboto'] leading-tight"
              >
                Rade Horvat
              </div>
              <div
                data-layer="Time"
                className="Time pl-[18px] justify-end items-center flex"
              >
                <div
                  data-layer="Time"
                  className="Time text-right text-[#b3b3b3] text-[13px] font-normal font-['Roboto Condensed'] leading-tight"
                >
                  9:41 AM
                </div>
              </div>
            </div>
            <div
              data-layer="Title"
              className="Title w-[306px] grow shrink basis-0 text-white/30 text-[15px] font-normal font-['Roboto'] leading-tight"
            >
              hey, joe! I’m writing because I’ve had a bran...
            </div>
          </div>
        </div>
        <div
          data-layer="Chat"
          className="Chat self-stretch pl-2 pr-3.5 py-2 bg-gradient-to-r from-[#3e3e3e] to-neutral-700 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
        >
          <div
            data-layer="App Icon"
            className="AppIcon w-[45px] h-[45px] rounded-[25px] justify-center items-center flex overflow-hidden"
          >
            <img
              data-layer="No App Icon"
              className="NoAppIcon w-[45px] h-[45px]"
              src="https://via.placeholder.com/45x45"
            />
          </div>
          <div
            data-layer="Title, Time and Description"
            className="TitleTimeAndDescription grow shrink basis-0 h-10 flex-col justify-start items-start inline-flex"
          >
            <div
              data-layer="Title and Time"
              className="TitleAndTime self-stretch justify-start items-start gap-4 inline-flex"
            >
              <div
                data-layer="Title"
                className="Title grow shrink basis-0 text-white text-[15px] font-semibold font-['Roboto'] leading-tight"
              >
                Georgia Lenny
              </div>
              <div
                data-layer="Time"
                className="Time pl-[18px] justify-end items-center flex"
              >
                <div
                  data-layer="Time"
                  className="Time text-right text-[#b3b3b3] text-[13px] font-normal font-['Roboto Condensed'] leading-tight"
                >
                  9:41 AM
                </div>
              </div>
            </div>
            <div
              data-layer="Title"
              className="Title w-[306px] grow shrink basis-0 text-white/30 text-[15px] font-normal font-['Roboto'] leading-tight"
            >
              hey, joe! I’m writing because I’ve had a bran...
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Chat"
        className="Chat self-stretch pl-2 pr-3.5 py-2 bg-gradient-to-r from-[#3e3e3e] to-neutral-700 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
      >
        <div
          data-layer="App Icon"
          className="AppIcon w-[55px] h-[55px] rounded-[50px] justify-center items-center flex overflow-hidden"
        >
          <img
            data-layer="No App Icon"
            className="NoAppIcon w-[55px] h-[55px]"
            src="https://via.placeholder.com/55x55"
          />
        </div>
        <div
          data-layer="Name and Balance"
          className="NameAndBalance grow shrink basis-0 flex-col justify-start items-start inline-flex"
        >
          <div
            data-layer="Name"
            className="Name self-stretch justify-start items-start gap-4 inline-flex"
          >
            <div data-layer="Name" className="Name grow shrink basis-0">
              <span className="text-white text-lg font-semibold font-['Roboto'] leading-tight">
                Damjan Nikolvski{" "}
              </span>
              <span className="text-white text-[15px] font-normal font-['Roboto'] leading-tight">
                •{" "}
              </span>
              <span className="text-[#616161] text-[15px] font-normal font-['Roboto'] leading-tight">
                2999 C
              </span>
            </div>
          </div>
          <div
            data-layer="Balance"
            className="Balance w-[306px] text-white/30 text-[15px] font-normal font-['Roboto'] leading-tight"
          >
            live it, love it, eat it...
          </div>
        </div>
        <div
          data-layer="Settings"
          className="Settings h-10 flex-col justify-start items-start inline-flex"
        >
          <div
            data-layer="Settings"
            className="Settings w-10 grow shrink basis-0 px-0.5 py-[3px] bg-gradient-to-r from-[#a5a5a5] to-[#18181a] rounded-[20px] flex-col justify-center items-center gap-2.5 flex"
          />
        </div>
      </div>
    </div>
  );
}
