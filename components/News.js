import React from 'react'

function News({article}) {
  return (
    <div className='p-3 py-4 divide-y divide-gray-700 hover:bg-gray-200 transition duration-200'>
        <a href={article.url} target ="_blank">
     <div className='flex justify-between'>
     <div className=''>
                <h6 className='text-sm font-bold'>{article.title}</h6>
                <p className='text-xs text-gray-500'>{article.source.name}</p>    
            </div>
            <img className='h-20 w-24 rounded-xl' src={article.urlToImage} alt=""/>
     </div>
        </a>
    </div>
  )
}

export default News