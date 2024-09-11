import { useDispatch } from "react-redux";
import { addNowPlayMovieList } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    //fetch the data from TMBD and update the redux store - doesnt support SRP.
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    const jsonData = await data.json();

    // console.log(jsonData.results);
    dispatch(addNowPlayMovieList(jsonData.results));
    };

    useEffect(()=>{
    getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;