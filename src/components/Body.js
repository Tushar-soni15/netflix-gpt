import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovie'
import StreamContainer from './StreamContainer';
import MovieListContainer from './MovieListContainer';

const Body = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      {/* 
      StreamingContainer
        - video background 
        - video title
      movieListCOntainer
        - movie list 
        - cards  */}
        <StreamContainer/>
        <MovieListContainer/>
    </div>
  )
}

export default Body;