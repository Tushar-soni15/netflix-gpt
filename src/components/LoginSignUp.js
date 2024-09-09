import React, { useState } from 'react'
import Header from './Header'

const LoginSignUp = () => {

  const [isSignUp, setisSignUp] = useState(false);

  return (
    <div className="relative h-screen">
      <Header />
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
            type="email"
            placeholder="Enter Your Name"
            className="border bg-black bg-opacity-30 border-white mb-4 p-3 w-full rounded text-white"
          />}

          <input
            type="email"
            placeholder="Email"
            className="border bg-black bg-opacity-30 border-white mb-4 p-3 w-full rounded text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="border bg-black bg-opacity-50 border-white mb-6 p-3 w-full rounded text-white"
          />

          <button className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition w-full">
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

export default LoginSignUp