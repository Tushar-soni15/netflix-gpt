import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieListCards = ({poster}) => {
  return (
    <div className='w-44 p-2 hover:w-64 cursor-pointer'>
        <img alt="movie poster"
        src={IMG_CDN + poster}/>
    </div>
  )
}

export default MovieListCards;