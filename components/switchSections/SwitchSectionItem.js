import Image from "next/image";
import React from "react";
import Switch from "../Switch";

const SwitchSectionItem = ({
  icon,
  iconDescription,
  text,
  textColor,
  divider,
}) => {
  return (
    <div
      className={`flex flex-row h-10 items-center justify-between w-[215px] ${divider} pr-6`}
    >
      <div className="flex flex-row items-center justify-center">
        <Image src={icon} alt={iconDescription} width={24} height={24} />
        <p className={`text-xs font-normal ${textColor}`}>{text}</p>
      </div>
      <div className="flex flex-row">
        <Switch
          color={"bg-[#FA36F6]"}
          circleheight={"h-[16px]"}
          circlewidth={"w-[16px]"}
          containerheight={"h-[20px]"}
          containerwidth={"w-[36px]"}
          circleLocation={"justify-end"}
        />
      </div>
    </div>
  );
};

export default SwitchSectionItem;
