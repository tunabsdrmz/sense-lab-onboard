import Image from "next/image";
import React from "react";
import SidebarItem from "./SidebarItem";
import Switch from "../Switch";
const sidebarItems = [
  {
    icon: "/icons/homeIcon.png",
    iconDescription: "Home icon",
    isActive: false,
  },
  {
    icon: "/icons/settingsIcon.png",
    iconDescription: "Settings icon",
    isActive: false,
  },
  {
    icon: "/icons/analysisIcon.png",
    iconDescription: "Analysis icon",
    isActive: false,
  },
  {
    icon: "/icons/feedIcon.png",
    iconDescription: "Feed icon",
    isActive: true,
  },
];
const Sidebar = () => {
  return (
    <div
      className="flex flex-col items-center w-[89px] h-screen pt-6 pb-7 
    bg-gradient-to-b from-[#FA36F6] to-[#8098FA]"
    >
      {/* sidebar Logo */}

      <Image
        src={"/icons/appLogo.png"}
        priority={true}
        alt="App logo"
        width={32}
        height={32}
      />

      {/* sidebar Icons */}

      <div className="  flex w-12 h-64 flex-col items-center justify-between gap-2.5 mt-[103px] mb-auto">
        {sidebarItems.map((item) => {
          return (
            <SidebarItem
              key={item.icon}
              icon={item.icon}
              iconDescription={item.iconDescription}
              isActive={item.isActive}
            />
          );
        })}
      </div>

      {/* sidebar bottom section */}

      <div className="flex flex-col items-center justify-center gap-5">
        <Switch
          circleheight={"h-[20px]"}
          circlewidth={"w-[20px]"}
          containerheight={"h-[26px]"}
          containerwidth={"w-[44px]"}
          color={"bg-[#EAECF0]"}
          icon={"/icons/switchIcon.png"}
          iconDescription={"switch Icon"}
          circleLocation={"justify-start"}
        />

        <SidebarItem
          icon={"/icons/logoutIcon.png"}
          iconDescription={"logout icon"}
          isActive={false}
        />
      </div>
    </div>
  );
};

export default Sidebar;
