// src/components/MyList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';

const MyList = () => {
    const savedMovies = useSelector((store) => store.saved.savedMovies);

    if (savedMovies.length === 0) {
        return (
            <div className="p-8 bg-black min-h-screen">
                <h1 className="text-white text-3xl font-bold mb-4">My List</h1>
                <p className="text-white">Your list is empty.</p>
            </div>
        );
    }

    return (
        <div className="p-8 bg-black min-h-screen">
            <h1 className="text-white text-3xl font-bold mb-6">My List</h1>

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
