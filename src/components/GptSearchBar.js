import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pb-[100%] pt-64 h-full w-full bg-gray-900 flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()}>
      <input
        className='border border-white bg-black bg-opacity-85 p-4 rounded-lg shadow-lg text-left w-96'
        type="text"
        placeholder='What would you like to search today?'/>
        <button className='bg-red-600 text-white py-4 px-6 ml-6 rounded hover:bg-red-700 transition'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar