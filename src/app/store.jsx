import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import savedReducer from '../features/saved/savedSlice'
import programmingReducer from '../features/programming/programmingSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    saved: savedReducer,
    programming: programmingReducer,
  },
});
