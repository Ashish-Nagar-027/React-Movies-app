/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";


import { setMoviesData } from "../features/MoviesSlice";
import Skeletons from "./Skeletons";




const MoviesCards = ({ allmovies=true }) => {
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.MoviesData.movies);
  const favoriteMovies = useSelector((state) => state.FavMoviesData.FavMovies);
  const [loading , setLoading] = useState(true)

  // sorting the movies from high to low ratting
  const sortByRating = (moviesArray) => {
    return moviesArray.sort((a, b) => b.rating - a.rating);
  };


  useEffect(() => {
    const url = import.meta.env.VITE_MOVIES_DATA_API;

    const data = fetch(url);
    data
      .then((response) => response.json())
      .then((json) => sortByRating(json))
      .then((moviesData) => {
        setLoading(false);
        dispatch(setMoviesData(moviesData));
      });
  }, []);

  return (
    <div className="  p-5 flex justify-center gap-4 flex-wrap">
     {  loading &&  <Skeletons /> }   

      {allmovies ? (
        moviesData &&
        moviesData?.map((movieData) => {
          return <MovieCard key={movieData.id} movieData={movieData} />;
        })
      ) : moviesData && favoriteMovies.length === 0 ? (
        <h1>You have not added any favorite movies</h1>
      ) : (
        moviesData?.map((movieData) => {
          return (
            favoriteMovies.includes(movieData.id) && (
              <MovieCard key={movieData.id} movieData={movieData} />
            )
          );
        })
      )}
    </div>
  );
};

export default MoviesCards;
