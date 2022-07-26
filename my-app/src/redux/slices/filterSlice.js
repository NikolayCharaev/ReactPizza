import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  categoryId: 0,
  sortProperty: { name: 'популярности(asc)', sort: 'rating' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sortProperty = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
