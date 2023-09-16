import Image from "next/image";
import React from "react";

const CardFollowSection = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <p className="text-[#8098FA] font-medium text-xs">Follow</p>
      <Image src={"/icons/plusIcon.png"} alt="" width={24} height={24} />
    </div>
  );
};

export default CardFollowSection;
