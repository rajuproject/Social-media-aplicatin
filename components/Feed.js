import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Input from './Input'
function Feed() {
  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl' >
    
    <div className='flex justify-between py-3 px-3 sticky top-0 border-b z-50 bg-white '>
    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
    <div className='hoverEffect'>
<SparklesIcon className='h-5'/>
    </div>

    </div>
    <Input/>
    </div>
  )
}

export default Feed