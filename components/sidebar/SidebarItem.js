import Image from "next/image";
import React from "react";

const SidebarItem = ({ icon, iconDescription, isActive }) => {
  return (
    <div
      className={
        isActive
          ? "w-12 h-12 rounded-2xl flex items-center justify-center bg-white"
          : " w-12 h-12 rounded-2xl flex items-center justify-center bg-[rgba(255,255,255,0.12)]"
      }
    >
      <Image alt={iconDescription} src={icon} width={24} height={24} />
    </div>
  );
};

export default SidebarItem;
//isActive ? styles.iconContainerActive : styles.iconContainer
