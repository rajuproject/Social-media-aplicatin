import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Input from './Input'
import Post from './Post'
function Feed() {

const posts = [
    {
        id: "1",
        name: "Khairul Ahmed",
        userName: "khairulahmedraju",
        userImg: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG2020052510326.73b4cb51.jpg&w=1920&q=75",
        img: "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        text: "Wow!",
        timestamp: "2 hours age"
    },


    {
        id: "2",
        name: "Khairul Ahmed",
        userName: "khairulahmedraju",
        userImg: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG2020052510326.73b4cb51.jpg&w=1920&q=75",
        img: "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Wow!",
        timestamp: "2 days age"
    },


    {
        id: "3",
        name: "Khairul Ahmed",
        userName: "khairulahmedraju",
        userImg: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG2020052510326.73b4cb51.jpg&w=1920&q=75",
        img: "https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        text: "Wow!",
        timestamp: "2 months age"
    }
]







  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl' >
    
    <div className='flex justify-between py-3 px-3 sticky top-0 border-b z-50 bg-white '>
    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
    <div className='hoverEffect'>
<SparklesIcon className='h-5'/>
    </div>

    </div>
    <Input/>
    {
        posts.map((post)=>(
            <Post key={post.id} post ={post}/>
        ))
    }
    </div>
  )
}

export default Feed