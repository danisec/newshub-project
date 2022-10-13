import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  article: [],
  loading: false,
}

export const searchNews = createAsyncThunk(
  'search/searchNews',
  async (search) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=1cfa18d2d1c244e3863f19732e11da32`
    )
    return response.data.articles
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [searchNews.pending]: (state) => {
      state.loading = true
    },
    [searchNews.fulfilled]: (state, { payload }) => {
      state.article = payload
      state.loading = false
    },
    [searchNews.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default searchSlice.reducer