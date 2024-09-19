import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ReviewContainer = () => {
    const reviews = useSelector((store) => store.movieInfo.review);
    const [expandedReviews, setExpandedReviews] = useState({}); // Track expanded reviews

    if (reviews === null) return null;

    const toggleReadMore = (index) => {
        setExpandedReviews((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the current review's expanded state
        }));
    };

    // console.log(reviews)

    const MAX_CHAR = 200; // Maximum number of characters to display before "Read More"

    return (
        <div>
            <h1 className='text-2xl font-bold ml-9 pb-3'>Top Reviews</h1>
            {reviews.results.map((r, index) => {
                const isExpanded = expandedReviews[index];
                const shouldShowReadMore = r.content.length > MAX_CHAR;

                return (
                    <div key={index} className='ml-8 p-2 w-3/4 border border-gray mb-4 rounded-lg'>
                        <div className='flex items-center'>
                            <img 
                            className='w-14'
                            alt="author"
                            src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"/>
                            <div className=''>
                                <h1>
                                {r.author}
                                </h1>
                                <p className='text-sm text-gray-400 italic'>
                                A review written by {r.author} on {new Date(r.created_at).toLocaleDateString('en-GB')}
                                </p>
                            </div>
                        </div>
                        {isExpanded
                            ? r.content
                            : `${r.content.substring(0, MAX_CHAR)}...`}
                        
                        {shouldShowReadMore && (
                            <button 
                                onClick={() => toggleReadMore(index)} 
                                className='text-blue-500 ml-2'
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default ReviewContainer;
