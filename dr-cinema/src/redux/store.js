import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../services/APIservice';


export const appstore = configureStore({
    reducer: {
      [apiService.reducerPath]: apiService.reducer,
    },
    middleware: getetDefaultMiddleware => getetDefaultMiddleware().concat(apiService.middleware)
  });
