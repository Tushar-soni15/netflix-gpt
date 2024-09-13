import React, { useRef } from 'react'
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSearchStore';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery = "Act as a movie recomendation system and suggest some movies for the query: " + searchText.current.value + ", only give me names of 5 movies, comma seperatedlike the example result given ahead. Example result: 3 idiots, sholay, monica oh my darling, dhadkan, kill"

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptSearchResults.choices) {
      //error handling
    }
    // console.log(gptSearchResults.choices?.[0]?.message?.content);

    const gptMovies = gptSearchResults.choices?.[0]?.message?.content.split(", ") // make the list array.

    const searchMovieTMDB = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json = await data.json();
      return json.results;
    };

    // for each movie search in TMDB

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie)); // this will return a promise everytime it call the function, in our case it will call it 5 times and with using promise API funstion we cant get the result. The result of this data will be [promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray); // Promise.all will only finish once all the promise inside promise array will RESOLVE.
    console.log(tmdbResults); // here we will get the result which we can push to redux

    dispatch(addGptMovieResult({movieResults: tmdbResults, movieNames: gptMovies})); // in the same action we are passing the GPT suggested movies and the TMDB search reults of the GPT suggested movies.
  };
  return (
    <div className='pt-64 flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()}>
      <input
        ref = {searchText}
        className='border border-white bg-black bg-opacity-85 p-4 rounded-lg shadow-lg text-left w-96 text-white'
        type="text"
        placeholder='What would you like to search today?'/>
        <button
        onClick={handleGptSearch} 
        className='bg-red-600 text-white py-4 px-6 ml-6 rounded hover:bg-red-700 transition'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar