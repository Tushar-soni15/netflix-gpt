import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import Header from './Header';

const LoginSignUp = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setisSignUp] = useState(false);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // onAuthStateChanged is a utility by firbase, basically it ease down out code by calling this api everything the auth of a user changes - sign in, sign up or signout, it will get called therefore this is the best place to implement the dipatch action for our redux store and also to navigate.
  

  const checkFormVlidation = () => {
    const message =checkValidData(email.current.value, password.current.value);
    console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
    setErrorMessage(message);

    //if there is a message, then return the form from here only i dont want to go any further. - because if there is a message then there must be some error in the validation.
    if(message) return;

    //signin sign up logic
    if(isSignUp) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // update the display name
        updateProfile(user, {
            displayName: name.current.value
          })
          .then(() => {
            const {uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid, 
                email: email, 
                displayName: displayName}
              ));
          })
          .catch((error) => {
            setErrorMessage(error.message)
        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
      } else {
        // sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode + " " + errorMessage);
        })
      }
  };

  return (
    <div className="relative h-screen">
      <Header/>
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center h-full relative z-10">
        <form
        onSubmit={(e)=>e.preventDefault()} 
        className="bg-black bg-opacity-85 p-14 rounded-lg shadow-lg text-center w-96">
          <h1 className="text-2xl font-bold mb-6 text-white text-left">{isSignUp? "Sign UP":"Sign In"}</h1>
          
          {isSignUp && <input
          ref = {name}
            type="text"
            placeholder="Enter Your Name"
            className="border bg-black bg-opacity-30 border-white mb-4 p-3 w-full rounded text-white"
          />}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="border bg-black bg-opacity-30 border-white mb-4 p-3 w-full rounded text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="border bg-black bg-opacity-50 border-white mb-6 p-3 w-full rounded text-white"
          />
          <p className='text-red-500 mb-1 text-left text-sm'>{errorMessage}</p>
          <button
          onClick={checkFormVlidation} 
          className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition w-full">
            {isSignUp? "Sign Up": "Sign In"}
          </button>
          <p 
          onClick={()=>setisSignUp(!isSignUp)}
          className='cursor-pointer m-1 p-1 text-white text-left'>{isSignUp? "Already a user? Sign In now." : "New to NetflixGPT?"}
          {!isSignUp && <span className='text-white font-bold'>Sign up now.</span>}</p>
          <p className='m-1 p-1 text-gray-400 text-left text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </form>
      </div>
    </div>
  )
}

export default LoginSignUp;
