import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/bookSlice';
import filterReducer from './slices/filterSlice';
const store = configureStore({
  reducer: { books: booksReducer, filter: filterReducer },
});

export default store;
