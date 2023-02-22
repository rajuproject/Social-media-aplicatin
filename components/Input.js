import React from "react";
import profile1 from "./assests/IMG2020052510326.jpg";
import Image from "next/image";
import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/solid";
function Input() {
  return (
    <div className="flex border-b border-gray-100 p-2 space-x-2">
      <Image
        src={profile1}
        className="h-10 w-10 cursor-pointer hover:brightness-95 rounded-full"
      />

      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 "
            rows="2"
            placeholder="What's on your mind ? "
          ></textarea>
        </div>

        <div className="flex items-center justify-between p-2 ">
          <div className="flex">
            <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default Input;
