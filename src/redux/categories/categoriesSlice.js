import { createSlice } from '@reduxjs/toolkit';

const initialState = 'under the construction';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state) => state.value,
  },
});

export const { setStatus } = categoriesSlice.actions;
