import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview } from "../utils/movieDetailSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useReviews = () => {
    const dispatch = useDispatch();
  const {movie_id} = useParams();

  const reviewMovie = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/reviews", API_OPTIONS);
    const json = await data.json();

    // console.log(json);

    dispatch(addReview(json))
  };

  useEffect(()=>{
    reviewMovie();
    }, []);
};

export default useReviews;