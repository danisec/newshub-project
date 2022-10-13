import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import savedReducer from '../features/saved/savedSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    saved: savedReducer,
  },
})
