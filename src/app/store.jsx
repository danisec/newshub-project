import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import savedReducer from '../features/saved/savedSlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    saved: savedReducer,
    search: searchReducer,
  },
})
