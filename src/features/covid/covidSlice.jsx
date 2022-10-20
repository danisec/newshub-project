import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = `https://newsapi.org/v2/everything?q=covid-19&from=${getPreviousMonth()}&sortBy=publishedAt&apiKey=${
  import.meta.env.VITE_APP_API
}`;

const initialState = {
  article: [],
  isLoading: false,
};

function getPreviousMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const previousMonth = date.getMonth();
  const day = date.getDate();

  const joinDate = [year, previousMonth, day].join('-');
  return joinDate;
}

export const fetchArticle = createAsyncThunk(
  'covid/fetchArticles',
  async () => {
    const res = await axios.get(API);
    return res.data.articles;
  }
);

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchArticle.fulfilled]: (state, { payload }) => {
      state.article = payload;
      state.isLoading = false;
    },
    [fetchArticle.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default covidSlice.reducer;
