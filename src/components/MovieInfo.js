import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN } from '../utils/constants';

const MovieInfo = () => {
    const movieInfo = useSelector((store) => store.movieInfo.movieDetail);
    
    if(!movieInfo) return null;
    
    // console.log(movieInfo);
    return (
        <div>
            <div className='flex'>
                <div className='m-4'>
                <img 
                className='w-80 h-auto m-6 rounded-lg '
                alt="bg_poster" 
                src={IMG_CDN + movieInfo.poster_path}/>
                </div>
                <div>
                    <h1 className='text-4xl text-white font-bold mt-8'>{movieInfo.title}
                        <span className='text-3xl font-thin ml-2'>({new Date(movieInfo.release_date).getFullYear()})
                        </span>
                    </h1>
                    <h3 className='mt-1 flex'>
                        <span className='text-md font-thin text-white'>
                            {new Date(movieInfo.release_date).getDate()}/
                            {new Date(movieInfo.release_date).getMonth() + 1}/
                            {new Date(movieInfo.release_date).getFullYear()}
                        </span>
                        <span className='text-white ml-1 font-thin'>({movieInfo.origin_country[0]})</span>
                        <span className='mx-2 text-white'>&#8226;</span> {/* Bullet point */}
                        <span className='text-md text-gray-300'>
                        {movieInfo.genres.map(g => g.name).join(', ')}
                        </span>
                        <span className='mx-2 text-white'>&#8226;</span> {/* Bullet point */}
                        <span className='text-md text-gray-300'>
                        {Math.floor(movieInfo.runtime / 60)}h {movieInfo.runtime % 60}m
                        </span>
                    </h3>
                    <h3 className='text-sm text-gray-400 italic mt-12'>
                        {movieInfo.tagline}
                    </h3>
                    <h2 className='text-2xl text-white font-bold'>
                        Overview
                    </h2>
                    <p className='text-md w-96 text-white mt-1'>
                        {movieInfo.overview}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo