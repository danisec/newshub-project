import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import programmingReducer from '../features/programming/programmingSlice';
import covidReducer from '../features/covid/covidSlice';
import savedReducer from '../features/saved/savedSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    programming: programmingReducer,
    covid: covidReducer,
    saved: savedReducer,
    search: searchReducer,
  },
});
