import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { IMG_CDN } from '../utils/constants';

const ProfilePage = () => {
  // Fetching user data from Redux
  const user = useSelector((state) => state.user);
  const likedMovies = useSelector((store) => store.saved.likedMovies);

  const savedMovies = useSelector((store) => store.saved.savedMovies);

  return (
    <div className="p-8 pt-16 bg-gray-700 bg-gradient-to-b from-black min-h-screen">
      <Link 
        to="/browse"
        className="absolute top-5 left-5 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 flex items-center"
      >
        <FaArrowLeft className="mr-2" />
        Home
      </Link>

      <div className="text-white">
        <h1 className="text-3xl font-bold mb-6 mt-16">My Profile</h1>

        {/* Profile Details */}
        <div className="flex items-center space-x-8 mb-8">
          {/* Profile picture */}
          <img 
            className="w-24 h-24 rounded-full" 
            src={user.profilePicture || 'https://via.placeholder.com/150'} 
            alt="Profile Avatar" 
          />
          
          <div>
            {/* User's Name and Email */}
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          {/* Watchlist Summary */}
          <div>
            <h3 className="text-xl font-semibold">Watchlist Summary</h3>
            <p className="text-gray-400">
              You have {savedMovies.length} movies in your watchlist.
            </p>
          </div>

          {/* Account Status */}
          <div>
            <h3 className="text-xl font-semibold">Account Status</h3>
            <p className="text-gray-400">
              {user.membershipStatus ? user.membershipStatus : 'Free Account'}
            </p>
          </div>

          {/* Join Date */}
          <div>
            <h3 className="text-xl font-semibold">Join Date</h3>
            <p className="text-gray-400">
              {new Date(user.joinDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div>
            <h1>Liked Movies</h1>
            {likedMovies.length > 0 ? (
                likedMovies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={IMG_CDN + movie.poster_path} alt={movie.title} />
                    </div>
                ))
            ) : (
                <p>No liked movies yet.</p>
            )}
        </div>
    </div>
  );
};

export default ProfilePage;
