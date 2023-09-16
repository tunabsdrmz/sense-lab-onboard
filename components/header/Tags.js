import React from "react";

const Tags = ({ color, text }) => {
  return (
    <div className={`pt-1 pb-1 pl-2.5 pr-2.5 rounded-xl ${color}`}>
      <p className="font-normal text-xs text-[#7A7878] ">#{text}</p>
    </div>
  );
};

export default Tags;
