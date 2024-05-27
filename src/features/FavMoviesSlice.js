import { createSlice } from "@reduxjs/toolkit";

export const FavMoviesSlice = createSlice({
  name: "favoriteMovies",

  initialState: {
    FavMovies: [],
  },

  reducers: {
    setFavoriteMovies: (state, action) => {
      const id = action.payload;

      if (state.FavMovies.includes(id)) {
        state.FavMovies = state.FavMovies.filter((i) => i !== id);
      } else {
        state.FavMovies.push(id);
      }
    },
  },
});

export const { setFavoriteMovies } = FavMoviesSlice.actions;
export default FavMoviesSlice.reducer;
