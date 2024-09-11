import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, PROFILE_LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();

  useEffect(()=>{
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName } = user;
      dispatch(
        addUser({
          uid: uid, 
          email: email, 
          displayName: displayName
        })
      );
      navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    })

    return () => unsbscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
    })
  }
  return (
    <div className="absolute bg-gradient-to-b from-black flex justify-between items-center w-full">
      {/* Netflix Logo */}
      <div className="flex items-center mt-2">
        <img
          alt="logo"
          src={NETFLIX_LOGO}
          className="h-24 z-20"
        />
      </div>

      {/* Sign-out button and user icon */}
      {user && <div className="flex items-center space-x-4 pt-6">
        <img
          className="h-10 w-10 z-20"
          alt="user"
          src={PROFILE_LOGO}
        />
        <button
          onClick={handleSignOut}
          className="text-white text-lg font-semibold z-20"
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
