import React from 'react';
import { FaUser, FaEnvelope, FaPen, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-700 bg-gradient-to-b from-black text-white">
            <Link 
                to="/browse"
                className="absolute top-5 left-5 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 flex items-center"
            >
                <FaArrowLeft className="mr-2" /> {/* Back Arrow */}
                Home
            </Link>
            <div className="w-full max-w-lg space-y-6">
                <h1 className="text-3xl font-bold text-red-600 text-center">Contact Us</h1>
                <form className="space-y-6">
                    <div className="relative flex items-center">
                        <FaUser className="absolute left-3 text-red-600" />
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full bg-black text-white pl-10 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            required 
                        />
                    </div>
                    <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-3 text-red-600" />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full bg-black text-white pl-10 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            required 
                        />
                    </div>
                    <div className="relative flex items-start">
                        <FaPen className="absolute left-3 text-red-600 mt-3" />
                        <textarea 
                            placeholder="Your Message" 
                            className="w-full bg-black text-white pl-10 pt-3 pb-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
