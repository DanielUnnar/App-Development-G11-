import { createSlice } from '@reduxjs/toolkit';

const cinemasSlice = createSlice({
  name: 'cinemas',
  initialState: {
    cinemas: [],
  },
  reducers: {
    setCinemas: (state, action) => {
        return { ...state, cinemas: action.payload };
      },
  },
});

export const { setCinemas } = cinemasSlice.actions;
export default cinemasSlice.reducer;
