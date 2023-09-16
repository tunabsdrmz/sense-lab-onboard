import Image from "next/image";
import React from "react";

const Switch = ({
  containerwidth,
  containerheight,
  circlewidth,
  circleheight,
  color,
  icon,
  iconDescription,
  circleLocation,
}) => {
  return (
    <div
      className={`${containerwidth} ${containerheight} rounded-[100px] ${color} flex items-center ${circleLocation} p-0.5`}
    >
      <div
        className={`${circlewidth} ${circleheight} rounded-full bg-white flex items-center justify-center`}
      >
        {icon ? (
          <Image src={icon} alt={iconDescription} width={12} height={12} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Switch;
