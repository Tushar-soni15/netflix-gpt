import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoStream from './VideoStream';

const StreamContainer = () => {
 const movie = useSelector((store) => store.movie?.nowPlayingMovies);
 if(!movie) return;
//  console.log(movie[0]);
const mainMovie = movie[0];

const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} info={overview}/>
        <VideoStream movieId= {id} />
    </div>
  )
}

export default StreamContainer