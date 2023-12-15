import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import upcomingMoviesReducer from './reducers/upcomingMoviesReducer';
import cinemasReducer from './reducers/cinemasReducer';
import tokenReducer from './reducers/tokenReducer';

export const appstore = configureStore({
    reducer: {
      movies: moviesReducer,
      upcomingMovies: upcomingMoviesReducer,
      cinemas: cinemasReducer,
      token: tokenReducer,
    },
    devTools: false,
  });
