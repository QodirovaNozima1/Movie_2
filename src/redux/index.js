import { configureStore } from '@reduxjs/toolkit'
import auth from './features/auth.slice'
import saved from './features/save.slice'
import { mainApi } from './api'

export const store = configureStore({
  reducer: {
    auth,
    [mainApi.reducerPath]: mainApi.reducer,
    saved,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})