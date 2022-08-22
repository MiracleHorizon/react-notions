import { configureStore } from '@reduxjs/toolkit'

// api
import { authApi } from 'services/auth.api'
import { pagesApi } from 'services/pages.api'
import { tasksListsApi } from 'services/tasksLists.api'

// slices.
import auth from './slices/auth'
import app from './slices/app'
import pages from './slices/pages'
import tasksLists from './slices/tasksLists'
import modals from './slices/modals'
import alerts from './slices/alerts'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [pagesApi.reducerPath]: pagesApi.reducer,
    [tasksListsApi.reducerPath]: tasksListsApi.reducer,
    auth,
    pages,
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
