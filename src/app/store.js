import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "../features/MoviesSlice";
import FavMoviesReducer from "../features/FavMoviesSlice";

export default configureStore({
  reducer: {
    MoviesData: MoviesReducer,
    FavMoviesData: FavMoviesReducer,
  },
});
