import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SERVER_API } from 'utils/constants/app'
import IUpdateUserParams from 'models/api/user/IUpdateUserParams'
import IUploadAvatarParams from 'models/api/user/IUploadAvatarParams'
import IChangePasswordParams from 'models/api/user/IChangePasswordParams'

export const userApi = createApi({
  reducerPath: 'user/api',

  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/user`,
  }),

  endpoints: build => ({
    updateUser: build.mutation<void, IUpdateUserParams>({
      query: ({ _id, body }) => ({
        url: `/update/${_id}`,
        method: 'POST',
        body,
      }),
    }),

    uploadAvatar: build.mutation<void, IUploadAvatarParams>({
      query: ({ _id, file }) => ({
        url: `/files/${_id}/avatar`,
        method: 'POST',
        body: file,
      }),
    }),

    deleteUser: build.mutation<void, string>({
      query: _id => ({
        url: `/delete/${_id}`,
        method: 'DELETE',
      }),
    }),

    changePassword: build.mutation<any, IChangePasswordParams>({
      query: ({ _id, ...body }) => ({
        url: `/update/password/${_id}`,
        method: 'POST',
        body: { ...body },
      }),
    }),

    checkPassword: build.mutation<any, { author: string; password: string }>({
      query: ({ author, ...body }) => ({
        url: `/verify/password/${author}`,
        method: 'POST',
        body,
      }),
    }),

    resetPassword: build.mutation<
      { email: string },
      { code: string; password: string }
    >({
      query: ({ code, ...body }) => ({
        url: `/reset/password/${code}`,
        method: 'POST',
        body,
      }),
    }),

    sendChangeEmailVerifyCode: build.mutation<
      void,
      { author: string; email: string }
    >({
      query: ({ author, ...body }) => ({
        url: `/verify/email/send/${author}`,
        method: 'POST',
        body,
      }),
    }),

    verifyChangeEmailCode: build.mutation<
      any,
      { author: string; code: string }
    >({
      query: ({ author, ...body }) => ({
        url: `/verify/email/${author}`,
        method: 'POST',
        body,
      }),
    }),

    sendResetPasswordVerifyCode: build.mutation<void, { email: string }>({
      query: body => ({
        url: `/verify/password/send`,
        method: 'POST',
        body,
      }),
    }),

    verifyResetPasswordCode: build.mutation<void, { code: string }>({
      query: ({ code }) => ({
        url: `/verify/password/${code}`,
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useUpdateUserMutation,
  useUploadAvatarMutation,
  useDeleteUserMutation,
} = userApi

// Change password.
export const {
  useChangePasswordMutation,
  useCheckPasswordMutation,
  useSendChangeEmailVerifyCodeMutation,
  useVerifyChangeEmailCodeMutation,
} = userApi

// Reset password.
export const {
  useResetPasswordMutation,
  useSendResetPasswordVerifyCodeMutation,
  useVerifyResetPasswordCodeMutation,
} = userApi
