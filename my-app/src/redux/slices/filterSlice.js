import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  searchVaue: '',
  categoryId: 0,
  currentPage: 1,
  sortProperty: { name: 'популярности(asc)', sort: 'rating' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValueData(state, action) {
      state.searchVaue = action.payload;
    },
    setSort(state, action) {
      state.sortProperty = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const selectSort = (state) => state.filterSlice.sortProperty
// expoer const selectFilter = 

export const { setCategoryId, setSort, setCurrentPage,setSearchValueData} = filterSlice.actions;
export default filterSlice.reducer;
