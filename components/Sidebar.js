import Image from "next/image";
import React from "react";
import logo from "./assests/download.png";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="hidden h-full sm:flex flex-col p-2 xl:items-start fixed">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width="50" height="50" src={logo} />
      </div>

      {/* Main  */}

      <div className="mt-4 mb-2.5 xl:items-center">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* button  */}

      <button className="bg-blue-400 text-white rounded-full hidden xl:inline hover:brightness-95 text-lg w-56 h-12 font-bold shadow-md">Tweet</button>

      <div className=" hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
        <img className="h-10 w-10" src="https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG-300x300.png" />
        <div className="hidden xl:inline">
          <h4 className="font-bold ">Khairul Ahmed</h4>
          <p className="text-gray-500">@khairulahmed</p>
        </div>
        <EllipsisHorizontalIcon  className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
