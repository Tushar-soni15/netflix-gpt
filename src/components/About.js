import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 bg-gradient-to-b from-black text-white px-5">
            <Link 
                to="/browse"
                className="absolute top-5 left-5 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 flex items-center"
            >
                <FaArrowLeft className="mr-2" /> {/* Back Arrow */}
                Home
            </Link>
            <div className="w-full max-w-3xl text-center space-y-6">
                <h1 className="text-4xl font-bold text-red-600">About This App</h1>
                <p className="text-lg">
                    Welcome to the <span className="text-red-600 font-semibold">Netflix Clone App</span>, a project inspired by Akshay Saini's <span className="text-red-600 font-semibold">Namaste React</span> course. This is not just a regular movies app, it's an app all about movies, with unique features that make exploring your favorite films both fun and interactive.
                </p>
                <p className="text-lg">
                    One of the standout features of this app is the <span className="text-red-600 font-semibold">GPT Search</span>. Using the powerful GPT API, the app can intelligently suggest movies similar to the ones you love. Simply input a movie, and let the app recommend titles that match your taste.
                </p>
                <p className="text-lg">
                    Beyond the course, I've added some features out of my curiosity to make the app more user-friendly and interactive. You can:
                </p>
                <ul className="list-disc list-inside text-left space-y-3">
                    <li>Get detailed information about movies, including plot summaries and key details.</li>
                    <li>Like or save your favorite movies for quick access later.</li>
                    <li>Read and explore reviews of movies to see what others are saying.</li>
                    <li>Get comprehensive cast information and see who starred in each movie.</li>
                </ul>
                <p className="text-lg border border-gray-900 p-2 m-2 shadow-lg rounded-lg">
                    All these features are packed into the most minimal and user-friendly UI possible, making sure the experience is smooth and intuitive.
                </p>
            </div>
        </div>
    );
};

export default About;
