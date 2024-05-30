import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const favouriteSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFavMovie: (state, action) => {
      const { imdbID } = action.payload;
      const existingMovie = state.movies.find((movie) => movie.imdbID === imdbID);
      if (!existingMovie) {
        state.movies.push(action.payload);
      }
    },
    removeFavMovie: (state, action) => {
      const { imdbID } = action.payload;
      state.movies = state.movies.filter((movie) => movie.imdbID !== imdbID);
    },
  },
});

export const { setFavMovie, removeFavMovie } = favouriteSlice.actions;
export default favouriteSlice.reducer;
