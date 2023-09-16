import React from "react";
import CardAvatarSection from "./CardAvatarSection";
import CardFollowSection from "./CardFollowSection";
import Image from "next/image";

const CardInnerContainer = ({
  innerContainerDirection,
  innerContainerHeight,
  innerContainerWidth,
  avatarSectionjustify,
  areaContainerWidth,
  areaContainerHeight,
}) => {
  return (
    <div
      className={`bg-white flex flex-col w-340 
      h-414 rounded-xl absolute top-9 p-4`}
    >
      <div className={`flex flex-row items-center justify-between`}>
        <CardAvatarSection />
        <CardFollowSection />
      </div>
      <p className="font-normal text-xs text-[#2C2C2C] text-left pt-3">
        We`ve received credible information that there may soon be an attack on
        our social media accounts, using an inside source at
        <span className="text-[#BD68F8]"> #twitter</span> to bypass our
        security. <span className="text-[#BD68F8]"> #staystrong</span>
      </p>
      <div
        className={`w-308 h-252 mt-3 rounded-xl bg-[rgba(0,0,0,0.12)] flex items-center justify-center`}
      >
        <Image src={"/icons/areaIcon.png"} alt="" width={55} height={55} />
      </div>
    </div>
  );
};

export default CardInnerContainer;
