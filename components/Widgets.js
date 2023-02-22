import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import News from './News'

function Widgets({newsResult, randomUserResults}) {

    const newses = newsResult.articles;
    const randomUserResult = randomUserResults.results

  


    const [articleNum, setArticleNum] = useState(3)
    const [randomUserNum, setRandomUserNum] = useState(4)
  return (
    <div className='xl:w-[400px] hidden lg:inline ml-8 space-y-5'>
        <div className='w-[96%] xl:w-[75%] sticky py-1.5 z-50 top-0 bg-white'>
            <div className='relative flex items-center p-3 rounded-full bg-gray-400'>
                <MagnifyingGlassIcon className='h-5 z-50 text-gray-500 '/>
                <input type="text" className='absolute inset-0 border-gray-500 focus:shadow-md bg-gray-100 focus:bg-white text-gray-700 rounded-full pl-11' placeholder='Search Twitter'/>
            </div>
        </div>




        <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl-w-[75%]'>

        <h4 className='font-bold text-xl px-4'> What's happening</h4>
            {
                newses.slice(0, articleNum).map((article) => (
                    <News key={article.title} article ={article}/>
                ))
            }

            <button onClick={()=> setArticleNum(articleNum + 3 )} className='text-blue-300 pl-4 pb-3 hover:text-blue-400'>Show More</button>
        </div>

        <div className=' sticky top-16 text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl-w-[75%]'>
            <h4 className='font-bold text-xl px-4'>Who to follow</h4>

            {
                randomUserResult.slice(0, randomUserNum).map((randomUser) => (
                    <div className='flex  items-center' key={randomUser.login.username}>
                 <div className=' flex py-2 px-2  rounded-lg cursor-pointer hover:bg-gray-300'>
                 <img className='rounded-full mr-2 h-10 w-10' src={randomUser.picture.large} alt = ""/>
                    
                    <div>
                    <a href='' ><h5 className='font-bold text-gray-700 hover:underline '>{randomUser.name.first + " " + randomUser.name.last}</h5></a>
                        <h4 className=''>{randomUser.login.username}</h4>
                        
                    </div>
                 </div>
                    <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 mr-4 ml-auto">Follow</button>
                    </div>
                ))
            }

            <button  onClick={()=>setRandomUserNum(randomUserNum + 3 )} className='text-blue-300 pl-4 pb-3 hover:text-blue-400'>Show More</button>

        </div>
    </div>
  )
}

export default Widgets;