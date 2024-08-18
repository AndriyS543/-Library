import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/bookSlicer';
import filterReducer from './slices/filterSlice';
const store = configureStore({
  reducer: { books: booksReducer, filter: filterReducer },
});

export default store;
