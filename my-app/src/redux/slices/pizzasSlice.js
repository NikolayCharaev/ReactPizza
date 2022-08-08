import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkApi) => {
  const { sortBy, category, order, search, currentPage } = params;
  const { data } = await axios.get(
    `https://62b82c77f4cb8d63df59a96c.mockapi.io/items?&page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );

  return data
});

const initialState = {
  items: [],
  status: 'loading', // loading , success , error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    allPizzess(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectorCart = (state) => state.pizzasSlice

export const { allPizzess } = pizzaSlice.actions;
export default pizzaSlice.reducer;
