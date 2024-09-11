import { useDispatch } from "react-redux";
import { addTrailerinfo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useVideoTrailer = (movieId) => {
    const dispatch = useDispatch();
    // fetching the trailer info and updating the store with a particular trailer info data.
    const getMovieTeaser = async () => {
        const data = await 
        fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        const filterTrailerTypes = json.results.filter((v)=> v.type === "Trailer");
        const movieTrailer = filterTrailerTypes.length? filterTrailerTypes[0] : json.results[0];
        dispatch(addTrailerinfo(movieTrailer))
    };

    useEffect(()=>{
        getMovieTeaser();
    }, []);
};

export default useVideoTrailer;