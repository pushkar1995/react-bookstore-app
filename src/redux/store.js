import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from '../pages/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,

  },
});

export default store;
