import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const MyList = () => {
    const savedMovies = useSelector((store) => store.saved.savedMovies);

    if (savedMovies.length === 0) {
        return (
            <div className="p-8 pt-16 bg-gray-700 bg-gradient-to-b from-black min-h-screen">
                <Link 
                    to="/browse"
                    className="absolute top-5 left-5 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 flex items-center"
                >
                    <FaArrowLeft className="mr-2" /> {/* Back Arrow */}
                    Home
                </Link>
                <h1 className="text-white text-3xl font-bold mb-4 mt-16">My Watchist</h1> {/* Added mt-16 */}
                <p className="text-white">Your list is empty.</p>
            </div>
        );
    }

    return (
        <div className="p-8 pt-16 bg-gray-700 bg-gradient-to-b from-black min-h-screen">
            <Link 
                to="/browse"
                className="absolute top-5 left-5 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 flex items-center"
            >
                <FaArrowLeft className="mr-2" /> {/* Back Arrow */}
                Home
            </Link>
            <h1 className="text-white text-3xl font-bold mb-6 mt-16">My Watchlist</h1> {/* Added mt-16 */}

            <div className="space-y-8">
                {savedMovies.map((movie) => (
                    <div key={movie.id} className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
                        <Link to={`/movie/${movie.id}`} className="flex-shrink-0">
                            <img
                                className="w-40 h-auto rounded-lg"
                                src={IMG_CDN + movie.poster_path}
                                alt={movie.title}
                            />
                        </Link>

                        <div className="text-white">
                            <Link to={`/movie/${movie.id}`}>
                                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                            </Link>

                            <p className="text-gray-400 mb-2">
                                Release Date: {new Date(movie.release_date).toLocaleDateString()}
                            </p>

                            <p className="text-gray-400 mb-2">
                                Rating: {movie.vote_average} / 10
                            </p>

                            <p className="text-gray-200">
                                {movie.overview.length > 150
                                    ? `${movie.overview.substring(0, 150)}...`
                                    : movie.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyList;
