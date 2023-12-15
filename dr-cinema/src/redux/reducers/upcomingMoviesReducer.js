import { createSlice } from '@reduxjs/toolkit';

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState: { upcomingMovies: [] },
  reducers: {
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const { setUpcomingMovies } = upcomingMoviesSlice.actions;
export default upcomingMoviesSlice.reducer;
