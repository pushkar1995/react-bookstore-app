import { configureStore } from '@reduxjs/toolkit';
import booksSliceReducer from './books/booksSlice';
import { categoriesSlice } from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: booksSliceReducer,
    category: categoriesSlice,
  },
});
