import React from "react";
import SearchInput from "./SearchInput";
import Tags from "./Tags";
import Image from "next/image";

const headerTags = [
  {
    id: 0,
    color: "bg-[rgba(247,147,26,0.12)]",
    text: "Cyripto",
  },
  {
    id: 1,
    color: "bg-[rgba(250,54,246,0.12)]",
    text: "CyriptoMining",
  },
  {
    id: 2,
    color: "bg-[rgba(59,207,253,0.12)]",
    text: "CyriptoMining",
  },
  {
    id: 3,
    color: "bg-[rgba(247,147,26,0.12)]",
    text: "Mining",
  },
  {
    id: 4,
    color: "bg-[rgba(250,54,246,0.12)]",
    text: "CyriptoMining",
  },
  {
    id: 5,
    color: "bg-[rgba(59,207,253,0.12)]",
    text: "Dominance",
  },
];

const Header = () => {
  return (
    <header className=" flex w-[90vw] h-[68px] flex-row items-center justify-start ml-6 mr-6">
      <SearchInput />
      <div className="flex flex-row gap-1 pl-6 mr-auto">
        {headerTags.map((tag) => {
          return <Tags key={tag.id} color={tag.color} text={tag.text} />;
        })}
      </div>
      {/*icons */}
      <div className="flex flex-row mr-4">
        <Image
          src={"/icons/filterIcon.png"}
          alt="Filter Icon"
          width={40}
          height={40}
        />
        <Image
          src={"/icons/notificationIcon.png"}
          alt="Notification Bell Icon"
          width={40}
          height={40}
        />
      </div>
      {/*Divider */}
      <div className="h-10 w-[1px] bg-[rgba(122,120,120,0.12)]" />
      {/*Profile avatar */}
      <div className="ml-4 pl-2 pr-4 flex flex-row items-center justify-center gap-2.5">
        <div className="bg-white rounded-full flex items-center justify-center w-10 h-10">
          <Image
            src={"/icons/profileIcon.png"}
            alt="profile icon"
            width={24}
            height={24}
          />
        </div>
        <p className="text-sm font-medium text-[#1E1E1E]">0x14...767a</p>
      </div>
    </header>
  );
};

export default Header;
