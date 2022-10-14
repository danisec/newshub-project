import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = `https://newsapi.org/v2/everything?q=programming&from=${getPreviousMonth()}&sortBy=publishedAt&apiKey=${
  import.meta.env.VITE_APP_API
}`;

const initialState = {
  article: [],
  loading: false,
};

function getPreviousMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const previousMonth = date.getMonth();
  const day = date.getDate();

  const joinDate = [year, previousMonth, day].join('-');
  return joinDate;
}

export const fetchArticles = createAsyncThunk(
  'programming/fetchArticles',
  async () => {
    const response = await axios.get(API);
    return response.data.articles;
  }
);

const programmingSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.loading = true;
    },
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.article = payload;
      state.loading = false;
    },
    [fetchArticles.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export default programmingSlice.reducer;
