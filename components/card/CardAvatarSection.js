import Image from "next/image";
import React from "react";

const CardAvatarSection = () => {
  return (
    <div className="flex flex-row">
      <Image src={"/icons/cryptoAvatar.png"} alt="" width={32} height={32} />
      <div className="flex flex-col items-start justify-around pl-2">
        <p className="text-[#1E1E1E] font-medium text-xs">Crypto Punks</p>
        <p className="text-[#7A7878] font-normal text-[10px]">4 minutes ago</p>
      </div>
    </div>
  );
};

export default CardAvatarSection;
