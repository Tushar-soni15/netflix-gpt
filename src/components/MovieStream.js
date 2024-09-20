import React from 'react'
import MovieInfo from './MovieInfo'
import { NETFLIX_LOGO } from '../utils/constants';
import useMovieDetail from '../hooks/useMovieDetail';
import useCredit from '../hooks/useCredit';
import MovieCastAndCrew from './MovieCastAndCrew';
import MovieReviews from './MovieReviews';
import useReviews from '../hooks/useReviews';
import useSimilarMovies from '../hooks/useSimilarMovies';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { Link } from 'react-router-dom';

const MovieStream = () => {
  useMovieDetail(); 
  useCredit(); 
  useReviews();
  useSimilarMovies();

  const similarMovie = useSelector((store) => store.movieInfo.similarMovies);
  if(!similarMovie) return null;
  // console.log(similarMovie);

  return (
    <div className='bg-gradient-to-b from-black bg-gray-600 h-screen w-screen'>
      <div className="">
        <Link to="/browse">
        <img
          alt="logo"
          src={NETFLIX_LOGO}
          className="h-24 z-20 pl-4"
        />
        </Link>
        <div>
          <MovieInfo/>
        </div>
        <div className='bg-white'>
          <MovieCastAndCrew/>
          <MovieReviews/>
        </div>
        <div className='bg-gray-600 bg-gradient-to-b from-black'>
          <div className='pl-7'>
          <MovieList title={"Similar Movies"} movies={similarMovie.results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieStream;