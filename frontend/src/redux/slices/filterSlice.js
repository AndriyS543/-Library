import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
  },
});

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;
export default filterSlice.reducer; // експортуємо наш reducer
