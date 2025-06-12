import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dashboarApi } from './reduxtoolkit/api/apiSlice';
import viewCourseDetailsStore  from './reduxtoolkit/features/viewCourseDetails';

export const store = configureStore({
  reducer: {
    [dashboarApi.reducerPath]: dashboarApi.reducer,
    courseDetails: viewCourseDetailsStore.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboarApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;