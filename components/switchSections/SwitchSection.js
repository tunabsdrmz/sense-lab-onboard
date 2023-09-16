import React from "react";
import SwitchSectionItem from "./SwitchSectionItem";

const switchItemsList = [
  {
    icon: "/icons/newsIcon.png",
    iconDescription: "News Icon",
    text: "7SL News",
    textColor: "text-[#BD68F8]",
    divider: "border-r-2 border-[#F5F7F8]",
  },
  {
    icon: "/icons/bitcoinIcon.png",
    iconDescription: "Bitcoin Icon",
    text: "Crypto Trade Signals",
    textColor: "text-[#F7931A]",
    divider: "border-r-2 border-[#F5F7F8]",
  },
  {
    icon: "/icons/mediumIcon.png",
    iconDescription: "Medium Icon",
    text: "Articles",
    textColor: "text-[#151515]",
    divider: "border-r-2 border-[#F5F7F8]",
  },
  {
    icon: "/icons/discordIcon.png",
    iconDescription: "Discord Icon",
    text: "Alpha Calls",
    textColor: "text-[#5865F2]",
    divider: "border-r-2 border-[#F5F7F8]",
  },
  {
    icon: "/icons/redditIcon.png",
    iconDescription: "Reddit Icon",
    text: "Discussion",
    textColor: " text-[#151515]",
  },
];
const SwitchSection = () => {
  return (
    <div className="flex flex-row items-center justify-around bg-white rounded-xl gap-6 ml-6 mr-6">
      {switchItemsList.map((item) => {
        return (
          <SwitchSectionItem
            key={item.text}
            icon={item.icon}
            iconDescription={item.iconDescription}
            text={item.text}
            textColor={item.textColor}
            divider={item.divider}
          />
        );
      })}
    </div>
  );
};

export default SwitchSection;
