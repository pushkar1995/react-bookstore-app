import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    itemId: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    itemId: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    itemId: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const {
        title, author, category, itemId,
      } = action.payload;
      state.push({
        itemId, title, author, category,
      });
    },
    remove: (state, action) => {
      const { id } = action.payload;
      return state.filter((book) => book.itemId !== id);
    },
  },
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
