/* eslint-disable react/prop-types */

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteMovies } from "../features/FavMoviesSlice";

const Favorite_Icon = ({ id }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.FavMoviesData.FavMovies);

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch(setFavoriteMovies(id));
  };

  return favoriteMovies.includes(id) ? (
    <MdFavorite
      id="like"
      onClick={handleLike}
      className=" cursor-pointer 
        m-1"
      size="2rem"
    />
  ) : (
    <MdFavoriteBorder
      id="like"
      onClick={handleLike}
      className=" cursor-pointer m-1"
      size="2rem"
    />
  );
};

export default Favorite_Icon;
