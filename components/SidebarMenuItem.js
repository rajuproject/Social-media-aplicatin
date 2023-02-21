import React from "react";

function SidebarMenuItem({ text, Icon, active }) {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3 ">
      <Icon className= "h-7" />
      <p className={`${active && "font-bold" } hidden xl:inline `}>{text}</p>
    </div>
  );
}

export default SidebarMenuItem;
