import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { authApi } from './slices/auth/auth.api'
import { pagesApi } from './slices/pages/pages.api'
import { tasksListsApi } from './slices/tasksLists/tasksLists.api'

import auth from './slices/auth'
import app from './slices/app'
import pages from './slices/pages'
import tasksLists from './slices/tasksLists'
import modals from './slices/modals'
import alerts from './slices/alerts'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth,
    [pagesApi.reducerPath]: pagesApi.reducer,
    pages,
    [tasksListsApi.reducerPath]: tasksListsApi.reducer,
    tasksLists,
    app,
    modals,
    alerts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      pagesApi.middleware,
      tasksListsApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
