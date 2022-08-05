import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SubmitAuthParams } from 'components/Auth/Form/AuthForm.types'
import IUser from 'models/IUser'

export const authApi = createApi({
  reducerPath: 'auth/api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/auth',
  }),

  endpoints: build => ({
    register: build.mutation<IUser, SubmitAuthParams>({
      query: body => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),

    login: build.mutation<IUser, SubmitAuthParams>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),

    authorization: build.query<IUser, void>({
      query: () => '/about',
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useAuthorizationQuery } =
  authApi

