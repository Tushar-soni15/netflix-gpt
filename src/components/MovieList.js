import React from 'react'
import MovieListCards from './MovieListCards';
import { Link } from 'react-router-dom';

const MovieList = ({title, movies}) => {
    if(movies === null) return;
    // console.log(movies[0]);
    return (
        <div className='text-white py-6'>
            <h1 className='text-3xl font-bold p-2'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                        {movies?.map(movie => 
                        <Link to={"/movie/"+movie.id} key = {movie.id}>
                            <MovieListCards poster = {movie.poster_path}/>
                        </Link>
                        )}
                </div>
            </div>
        </div>
  )
}

export default MovieList;