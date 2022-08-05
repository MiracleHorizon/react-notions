import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPage } from 'models/page/IPage'
import { IUpdatePageParams } from 'models/api/pages/IUpdatePageParams'
import ICreatePageBody from 'models/api/pages/ICreatePageBody'

export const pagesApi = createApi({
  reducerPath: 'pages/api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/workspace/pages',
  }),

  tagTypes: ['Pages'],

  endpoints: build => ({
    createPage: build.mutation<IPage, ICreatePageBody>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pages'],
    }),

    getAllPages: build.query<IPage[], string>({
      query: (userId) => `/user/${userId}`,
      providesTags: result => ['Pages'],
    }),

    getOnePage: build.query<IPage, string>({
      query: _id => ({
        url: `/${_id}`,
      }),
      providesTags: result => ['Pages'],
    }),

    updatePage: build.mutation<any, IUpdatePageParams>({
      query: ({ _id, body }) => ({
        url: `/${_id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Pages'],
    }),

    deletePage: build.mutation<string, string>({
      query: _id => ({
        url: `/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pages'],
    }),
  }),
})

export const {
  useCreatePageMutation,
  useGetAllPagesQuery,
  useGetOnePageQuery,
  useUpdatePageMutation,
  useDeletePageMutation,
} = pagesApi
