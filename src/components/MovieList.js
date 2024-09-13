import React from 'react'
import MovieListCards from './MovieListCards';

const MovieList = ({title, movies}) => {
    if(movies === null) return;
    // console.log(movies[0]);
    return (
        <div className='text-white py-6'>
            <h1 className='text-3xl font-bold p-2'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                    {movies?.map(movie => <MovieListCards poster = {movie.poster_path}
                    key = {movie.id}/>)}
                </div>
            </div>
        </div>
  )
}

export default MovieList;