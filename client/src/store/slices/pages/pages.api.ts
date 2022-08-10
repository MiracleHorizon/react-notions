import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IPage from 'models/page/IPage'
import ICreatePageBody from 'models/api/pages/ICreatePageBody'
import IUpdatePageParams from 'models/api/pages/IUpdatePageParams'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'
import IUpdatePageContentItemParams from 'models/api/pageContent/IUpdatePageContentItemParams'
import INotionContentItem from 'models/pageContent/INotionContentItem'

export const pagesApi = createApi({
  reducerPath: 'pages/api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/workspace/pages',
  }),

  tagTypes: ['Pages', 'Page'], //!

  endpoints: build => ({
    // Page.
    createPage: build.mutation<IPage, ICreatePageBody>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pages'],
    }),

    getAllPages: build.query<IPage[], string>({
      query: userId => `/user/${userId}`,
      providesTags: result => ['Pages'],
    }),

    getOnePage: build.query<IPage, string>({
      query: _id => ({
        url: `/${_id}`,
      }),
      providesTags: result => ['Pages'],
    }),

    //!
    updatePage: build.mutation<string, IUpdatePageParams>({
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

    // Notion(page) content items.
    createItem: build.mutation<INotionContentItem, ICreatePageContentItemBody>({
      query: body => ({
        url: `/content`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pages'],
    }),

    //! any
    updateItem: build.mutation<string, IUpdatePageContentItemParams>({
      query: ({ _id, body }) => ({
        url: `/content/${_id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Pages'],
    }),

    deleteItem: build.mutation<string, string>({
      query: _id => ({
        url: `content/${_id}`,
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
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = pagesApi
