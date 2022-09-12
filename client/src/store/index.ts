import { configureStore } from '@reduxjs/toolkit'

// api
import { authApi } from 'services/auth.api'
import { userApi } from 'services/user.api'
import { notionsApi } from 'services/notions.api'
import { tasksListsApi } from 'services/tasksLists.api'
import { decorApi } from 'services/decor.api'

// slices.
import user from './slices/user'
import app from './slices/app'
import notions from './slices/notions'
import tasksLists from './slices/tasksLists'
import modals from './slices/modals'
import alerts from './slices/alerts'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [notionsApi.reducerPath]: notionsApi.reducer,
    [tasksListsApi.reducerPath]: tasksListsApi.reducer,
    [decorApi.reducerPath]: decorApi.reducer,
    user,
    notions,
    tasksLists,
    app,
    modals,
    alerts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      notionsApi.middleware,
      tasksListsApi.middleware,
      decorApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
