import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import programmingReducer from '../features/programming/programmingSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    programming: programmingReducer,
  },
});
