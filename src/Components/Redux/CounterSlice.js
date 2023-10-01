import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'film',
  initialState: {
    movie: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.movie.push(action.payload);
    },
    deleteMovie: (state, action) => {
      state.movie.splice(
        state.movie.findIndex(movie => movie.id !== action.payload),
        1,
      );
    },
    sortMovie: state => {
      state.movie.sort((a, b) => a.Title.localeCompare(b.Title));
    },
  },
});

// Action creators are generated for each case reducer function
export const {addMovie, deleteMovie, sortMovie} = counterSlice.actions;
export const selectCount = state => state.counter.movie;

export default counterSlice.reducer;
