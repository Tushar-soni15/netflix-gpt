import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {
  const movies = useSelector((store) => store?.movie);

  if(movies === null) return;

  return (
    <div className='pl-14 bg-black'>
      <div className='-mt-80 relative z-20'>
      <MovieList title= {"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title= {"Trending"} movies={movies.popularMovies}/>
      <MovieList title= {"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title= {"Top Rated"} movies={movies.topRated}/>
      <MovieList title= {"Horror"} movies={movies.nowPlayingMovies}/>
      <MovieList title= {"Award-Winning Films"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
};

export default MovieListContainer;