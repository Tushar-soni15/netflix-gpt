import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    //fetch the data from TMBD and update the redux store - doesnt support SRP.
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
    const jsonData = await data.json();

    // console.log(jsonData.results);
    dispatch(addTopRatedMovie(jsonData.results));
    };

    useEffect(()=>{
    getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;