import React from 'react'
import MovieInfo from './MovieInfo'
import { NETFLIX_LOGO } from '../utils/constants';
import useMovieDetail from '../hooks/useMovieDetail';
import useCredit from '../hooks/useCredit';

const MovieStream = () => {
  useMovieDetail(); 
  useCredit(); 

  return (
    <div className=' bg-gradient-to-b from-black bg-gray-600 h-screen w-screen'>
      <div className="">
        <img
          alt="logo"
          src={NETFLIX_LOGO}
          className="h-24 z-20"
        />
        <div>
          <MovieInfo/>
        </div>
      </div>
    </div>
  )
}

export default MovieStream;