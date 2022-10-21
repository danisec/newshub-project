import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${
  import.meta.env.VITE_APP_API
}`

const initialState = {
  article: [],
  loading: false,
}

export const fetchNews = createAsyncThunk('home/fetchNews', async () => {
  const response = await axios.get(API)
  return response.data.articles
})

const homeSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.loading = true
    },
    [fetchNews.fulfilled]: (state, { payload }) => {
      state.article = payload
      state.loading = false
    },
    [fetchNews.rejected]: (state, action) => {
      state.loading = true
      state.error = action.error.message
    },
  },
})

export default homeSlice.reducer
