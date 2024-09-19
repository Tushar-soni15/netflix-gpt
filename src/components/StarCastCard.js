import React from 'react'
import { IMG_CDN } from '../utils/constants'

const StarCastCard = ({org_name, char, photo}) => {
  return (
    <div>
      <div className='w-44 border border-gray-200 m-2 rounded-lg overflow-hidden'>
        <div>
          <img 
          alt="cast" 
          src={IMG_CDN + photo}/>
        </div>
        <h1 className='font-bold text-lg pt-1 px-1'>{org_name}</h1>
        <h2 className='font-thin text-sm pb-2 px-1'>{char}</h2>
    </div>
    </div>
  )
}

export default StarCastCard;