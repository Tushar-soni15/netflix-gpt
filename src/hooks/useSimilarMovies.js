import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addSimilarMovies } from "../utils/movieDetailSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSimilarMovies = () => {
    const dispatch = useDispatch();
  const {movie_id} = useParams();

  const similarMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/similar", API_OPTIONS);
    const json = await data.json();

    // console.log(json);

    dispatch(addSimilarMovies(json))
  };

  useEffect(()=>{
    similarMovies();
    }, []);
};

export default useSimilarMovies;