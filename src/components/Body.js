import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovie'
import StreamContainer from './StreamContainer';
import MovieListContainer from './MovieListContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Body = () => {
  const gptBtn = useSelector((store) => store?.gpt?.gptBtnState)
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
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
      {gptBtn ? (<GptSearchPage/>) :( 
      <>
        <StreamContainer/>
        <MovieListContainer/>
      </>
      )}
      
    </div>
  )
}

export default Body;