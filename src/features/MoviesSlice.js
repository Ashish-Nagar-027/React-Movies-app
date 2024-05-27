import { createSlice } from "@reduxjs/toolkit";

export const MoviesSlice = createSlice({
  name: "MoviesData",
  initialState: {
    movies: null,
  },
  reducers: {
    setMoviesData: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMoviesData } = MoviesSlice.actions;
export default MoviesSlice.reducer;
