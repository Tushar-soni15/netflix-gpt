import React from 'react'
import { useSelector } from 'react-redux';
import StarCastCard from './StarCastCard';

const MovieCastAndCrew = () => {
    const credit = useSelector((store) => store.movieInfo.credit);
    if (!credit || !credit.cast) return null;
    // console.log(credit);

    // Limiting the cast to first 9 elements
    const limitedCast = credit.cast.slice(0, 9);

    return (
        <div className='py-2 px-8'>
            <h1 className='text-2xl font-bold ml-2 pt-3 pb-1'>Top billed Cast</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                {limitedCast.map(c => (
                    <StarCastCard 
                        key={c.id}
                        org_name={c.original_name} 
                        photo={c.profile_path} 
                        char={c.character}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default MovieCastAndCrew;
