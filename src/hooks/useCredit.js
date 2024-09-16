import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCredit } from "../utils/movieDetailSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useCredit = () => {
    const dispatch = useDispatch();
  const {movie_id} = useParams();

  const credit = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/credits", API_OPTIONS);
    const json = await data.json();

    // console.log(json);

    dispatch(addCredit(json))
  };

  useEffect(()=>{
    credit();
    }, []);
};

export default useCredit;