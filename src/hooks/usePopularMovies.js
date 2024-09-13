import { useDispatch } from "react-redux";
import { addPopularMovieList } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
    //fetch the data from TMBD and update the redux store - doesnt support SRP.
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
    const jsonData = await data.json();

    // console.log(jsonData.results);
    dispatch(addPopularMovieList(jsonData.results));
    };

    useEffect(()=>{
    getPopularMovies();
    }, []);
};

export default usePopularMovies;