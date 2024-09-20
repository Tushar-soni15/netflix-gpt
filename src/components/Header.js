import React, { useEffect, useRef, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, PROFILE_LOGO } from '../utils/constants';
import { toggleSearchBtn } from '../utils/gptSearchStore';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptBtn = useSelector((store) => store.gpt.gptBtnState);
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);  // State for popover visibility
  const popoverRef = useRef(null);  // Ref for popover

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsbscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful
    }).catch((error) => {
      navigate("/error");
    });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleSearchBtn());
  };

  const handleProfileClick = () => {
    setShowPopover(!showPopover);  // Toggle popover visibility
  };

  const handleClickOutside = (event) => {
    // If click is outside popoverRef, close the popover
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    if (showPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopover]);

  return (
    <div className="absolute bg-gradient-to-b from-black flex justify-between w-full">
      {/* Netflix Logo */}
      <div className="flex items-center mt-2">
        <Link className="z-20" to="/">
          <img alt="logo" src={NETFLIX_LOGO} className="h-24 z-20" />
        </Link>
        <div className="flex z-20 mt-1 ml-4">
          <ul className="flex space-x-6">
            <li className="text-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="text-white">
              <Link to="/mylist">My List</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* GPT Button, Profile Image and Popover */}
      {user && (
        <div className="flex items-center space-x-4 pt-6 relative mr-8">
          <button
            className="bg-red-700 p-2 mr-2 text-white rounded-lg hover:bg-red-800 z-20"
            onClick={handleGptSearchClick}
          >
            {gptBtn ? "Home Page" : "GPT Search"}
          </button>

          <img
            className="h-10 w-10 z-20 cursor-pointer mr-4"
            alt="user"
            src={PROFILE_LOGO}
            onClick={handleProfileClick}  // Toggle popover on click
          />

          {/* Popover Menu */}
          {showPopover && (
            <div
              ref={popoverRef}  // Assign ref to the popover
              className="absolute right-0 top-14 bg-gray-800 text-white rounded-lg shadow-lg w-40 py-2 z-30"
            >
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-700 rounded-t-lg"
              >
                My Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-b-lg"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
