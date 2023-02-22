import {
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-50">
      {/* iamge  */}
      <img src={post.userImg} className= "h-12 w-12 mr-4 rounded-full" alt="user-img" />

      <div className="">
        {/* header  */}
        <div className=" flex items-center justify-between">
          {/* post info  */}

          <div className="flex items-start space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
            <span className="text-sm sm:text-[15px]">{post.userName} - </span>
            <span className="text-sm sm:text-[15px]">{post.timestamp}</span>
          </div>

          <EllipsisHorizontalIcon className="h-10 w-10  hoverEffect hover:bg-sky-100 hover:text-sky-500" />
        </div>

        {/* post text  */}
        <p className="mb-2">{post.text}</p>
        {/* post image  */}
        <img className="rounded-2xl mr-2" src={post.img} alt="post image" />
        {/* icons  */}


        <div className="flex justify-between text-gray-500">
        <ChatBubbleOvalLeftIcon className="h-10 w-10 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
        <TrashIcon className="h-10 w-10 p-2 hoverEffect hover:text-red-600 hover:bg-red-100" />
        <HeartIcon className="h-10 w-10 p-2  hoverEffect hover:text-red-600 hover:bg-red-100" />
        <ShareIcon className="h-10 w-10 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
        <ChartBarIcon className="h-10 w-10 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}

export default Post;
