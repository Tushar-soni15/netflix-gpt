import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import useVideoTrailer from '../hooks/useVideoTrailerId';
import { saveMovie, removeMovie } from '../utils/savedMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MovieInfo = () => {
    const dispatch = useDispatch();
    
    const movieInfo = useSelector((store) => store.movieInfo.movieDetail);
    const savedMovies = useSelector((store) => store.saved.savedMovies); // Get saved movies from Redux
    const trailerId = useSelector((store) => store.movie?.trailerInfo);

    const [showTrailer, setShowTrailer] = useState(false); // State to manage trailer modal visibility
    const [currentTrailerId, setCurrentTrailerId] = useState(null); // State for current trailer ID

    const movieId = movieInfo?.id;

    // Fetch the trailer whenever the movieId changes
    useVideoTrailer(movieId);

    // Reset the trailer and close the modal when movie changes
    useEffect(() => {
        if (trailerId) {
            setCurrentTrailerId(trailerId.key); // Update trailerId when available
            setShowTrailer(false); // Close the modal when switching movies
        }
    }, [trailerId, movieId]); // Dependency array includes movieId and trailerId

    if (!movieInfo) return null;

    const isMovieSaved = savedMovies.some((movie) => movie.id === movieInfo.id);

    const handleSaveMovie = () => {
        if (isMovieSaved) {
            dispatch(removeMovie(movieInfo.id)); // Remove from list if already saved
            toast.info(`${movieInfo.title} removed from saved movies.`); // Show notification for removal
        } else {
            dispatch(saveMovie(movieInfo)); // Save to list if not already saved
            toast.success(`${movieInfo.title} added to saved movies!`); // Show notification for saving
        }
    };

    return (
        <div>
            <div className={showTrailer ? 'blur-md' : ''}> {/* Blur content if trailer modal is open */}
                <div className='flex'>
                    <div className='m-4'>
                        <img
                            className='w-80 h-auto m-6 rounded-lg '
                            alt="bg_poster"
                            src={IMG_CDN + movieInfo.poster_path}
                        />
                    </div>
                    <div>
                        <h1 className='text-4xl text-white font-bold mt-8'>
                            {movieInfo.title}
                            <span className='text-3xl font-thin ml-2'>({new Date(movieInfo.release_date).getFullYear()})</span>
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

                        {/* Buttons Section */}
                        <div className='flex mt-4 space-x-4 relative'>
                            <button className='flex items-center space-x-2 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600'>
                                <FontAwesomeIcon icon={faHeart} />
                                <span>Like</span>
                            </button>
                            <button
                                className={`flex items-center space-x-2 py-2 px-4 rounded ${
                                    isMovieSaved ? 'bg-blue-600' : 'bg-gray-700'
                                } text-white hover:bg-gray-600`}
                                onClick={handleSaveMovie}
                            >
                                <FontAwesomeIcon icon={faBookmark} />
                                <span>{isMovieSaved ? 'Saved' : 'Save'}</span>
                            </button>
                            <button
                                className='flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500'
                                onClick={() => setShowTrailer(true)} // Show modal on click
                            >
                                <FontAwesomeIcon icon={faPlay} />
                                <span>Play Trailer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Screen Modal Section */}
            {showTrailer && currentTrailerId && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
                    <div className="relative w-[80vw] h-[45vw] lg:w-[60vw] lg:h-[35vw]">
                        {/* Modal Close Button */}
                        <button
                            className='absolute top-4 right-4 text-white text-2xl'
                            onClick={() => setShowTrailer(false)}
                        >
                            &times;
                        </button>
                        <iframe
                            className='w-full h-full rounded-lg'
                            src={`https://www.youtube.com/embed/${currentTrailerId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default MovieInfo;
