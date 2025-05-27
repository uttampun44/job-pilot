import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dashboarApi } from './reduxtoolkit/api/apiSlice';

export const store = configureStore({
  reducer: {
    [dashboarApi.reducerPath]: dashboarApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboarApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;