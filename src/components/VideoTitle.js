import React from 'react'

const VideoTitle = ({title, info}) => {
  return (
    <div className='pl-14 pt-36 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-5xl font-bold pt-24'>{title}</h1>
        <p className='w-1/4 pt-4'>{info}</p>
        <button className='bg-white p-2 px-6 text-xl rounded-md text-black cursor-pointer hover:bg-opacity-70'>▶ Play</button>
        <button className='bg-gray-500 bg-opacity-45 p-2 m-2 px-6 text-xl rounded-md mx-2 cursor-pointer hover:bg-opacity-75'>ℹ️ More Info</button>
    </div>
  )
}

export default VideoTitle