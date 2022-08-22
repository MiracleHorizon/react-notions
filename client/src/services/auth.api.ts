import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_API } from 'utils/constants/app'
import { SubmitAuthParams } from 'components/Auth/Form/AuthForm.types'
import IAuthResponse from 'models/api/response/IAuthResponse'

const baseQuery = fetchBaseQuery({
  baseUrl: `${SERVER_API}/auth`,

  prepareHeaders: headers => {
    const token = window.localStorage.getItem('token')

    if (token) headers.set('authorization', `Bearer ${token}`)

    return headers
  },

  credentials: 'include',
})

export const authApi = createApi({
  reducerPath: 'auth/api',

  baseQuery,

  endpoints: build => ({
    register: build.mutation<IAuthResponse, SubmitAuthParams>({
      query: body => ({
        url: '/reg',
        method: 'POST',
        body,
      }),
    }),

    login: build.mutation<IAuthResponse, SubmitAuthParams>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),

    checkAuth: build.query<IAuthResponse, void>({
      query: () => '/refresh',
    }),

    logout: build.mutation<void, void>({
      query: () => '/logout',
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useLazyCheckAuthQuery,
  useLogoutMutation,
} = authApi
