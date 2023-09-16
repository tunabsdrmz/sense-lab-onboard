import Image from "next/image";
import React from "react";

const CardContainer = ({
  children,
  outerContainerWidth,
  outerContainerHeight,
  badgeicon,
  firstArrowIcon,
  secondArrowIcon,
  containerColor,
  badgeText,
}) => {
  return (
    <div className={`w-340 h-446 relative mt-11 ml-5`}>
      <div className="flex flex-row items-start justify-between ">
        {/*card badge */}
        <div
          className={` bg-spot-background w-[180px] rounded-t-xl pt-2 pb-8 flex flex-row items-center justify-center 
          `}
        >
          <Image src={badgeicon} alt="" width={24} height={24} />
          <p className="text-xs font-normal text-white">{badgeText}</p>
        </div>

        {/*card arrows */}

        <div className="w-14 h-6 flex flex-row gap-2">
          <div className="p-1 rounded-lg bg-white flex items-center justify-center">
            <Image src={firstArrowIcon} alt="arrow" width={16} height={16} />
          </div>
          <div className="p-1 rounded-lg bg-white flex items-center justify-center">
            <Image src={secondArrowIcon} alt="arrow" width={16} height={16} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardContainer;
