import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

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
    <div className="relative bg-gradient-to-b from-black flex justify-between items-center px-4 py-4">
      {/* Netflix Logo */}
      <div className="flex items-center">
        <img
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="h-24 z-20"
        />
      </div>

      {/* Sign-out button and user icon */}
      {user && <div className="flex items-center space-x-4 px-6">
        <img
          className="h-10 w-10 z-20"
          alt="user"
          src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
