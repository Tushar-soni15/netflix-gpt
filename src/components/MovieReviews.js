import React from 'react'
import { useSelector } from 'react-redux';
import ReviewContainer from './ReviewContainer';

const MovieReviews = () => {
    const movieInfo = useSelector((store) => store.movieInfo.movieDetail);
    
    if(!movieInfo) return null;
    return (
    <div>
        <div className='flex m-6 p-4'>
          <h1 className='mr-4'>
            <span className='font-bold text-lg'>Status: </span>{movieInfo.status}
          </h1>
          <h1 className='mx-6'>
          <span className='font-bold text-lg'>Original Language: </span>{movieInfo.spoken_languages[0].name}
          </h1>
          <h1 className='mx-6'>
          <span className='font-bold text-lg'>Budget: </span>${movieInfo.budget}
          </h1>
          <h1 className='mx-6'>
          <span className='font-bold text-lg'>Revenue: </span>${movieInfo.revenue}
          </h1>
        </div>
        <div>
            <ReviewContainer/>
        </div>
    </div>
    )
}

export default MovieReviews