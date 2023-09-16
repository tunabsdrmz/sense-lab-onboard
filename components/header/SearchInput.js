import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="flex flex-row items-center w-1/4 h-9 rounded-[10px] border-2 pt-1 pb-1 pr-0.5 bg-white ">
      <input
        placeholder="Search"
        className="pl-[12px] bg-white text-xs font-normal mr-auto"
      />
      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#A27DF9] ">
        <Image
          src={"/icons/searchIcon.png"}
          alt="Search Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default SearchInput;
