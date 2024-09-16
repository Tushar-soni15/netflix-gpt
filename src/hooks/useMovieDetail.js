import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addMovieDetails } from "../utils/movieDetailSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetail = () => {
    const dispatch = useDispatch();
  const {movie_id} = useParams();

  const movieInfo = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id, API_OPTIONS);
    const json = await data.json();

    // console.log(json);

    dispatch(addMovieDetails(json))
  };

  useEffect(()=>{
    movieInfo();
    }, []);
};

export default useMovieDetail;