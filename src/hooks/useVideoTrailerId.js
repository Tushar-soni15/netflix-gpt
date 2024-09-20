import { useDispatch } from "react-redux";
import { addTrailerinfo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useVideoTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTeaser = async () => {
        try {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                API_OPTIONS
            );
            const json = await data.json();

            // Ensure json.results exists and is an array
            if (json.results && Array.isArray(json.results) && json.results.length > 0) {
                const filterTrailerTypes = json.results.filter((v) => v.type === "Trailer");
                const movieTrailer = filterTrailerTypes.length ? filterTrailerTypes[0] : json.results[0];
                dispatch(addTrailerinfo(movieTrailer));
            } else {
                console.warn("No video results found for this movie.");
                dispatch(addTrailerinfo(null)); // Or handle no trailer found
            }
        } catch (error) {
            console.error("Error fetching trailer info:", error);
            dispatch(addTrailerinfo(null)); // Handle error
        }
    };

    useEffect(() => {
        if (movieId) {
            getMovieTeaser();
        }
    }, [movieId]); // Re-fetch trailer when movieId changes
};

export default useVideoTrailer;
