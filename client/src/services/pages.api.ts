import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SERVER_API } from 'utils/constants/app'
import IPage from 'models/page/IPage'
import ICreatePageBody from 'models/api/pages/ICreatePageBody'
import IUpdatePageParams from 'models/api/pages/IUpdatePageParams'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'
import IUpdatePageContentItemParams from 'models/api/pageContent/IUpdatePageContentItemParams'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import IUploadImage from 'models/api/IUploadImage'

export const pagesApi = createApi({
  reducerPath: 'pages/api',

  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/workspace/pages`,
  }),

  tagTypes: ['Pages', 'Page', 'Trash'], //!

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

    getDeletedPages: build.query<IPage[], string>({
      query: author => `/user/trash/${author}`,
      providesTags: result => ['Trash'],
    }),

    getPagesToMove: build.query<
      IPage[],
      { authorId: string; excludePageId: string }
    >({
      query: ({ authorId, excludePageId }) =>
        `/move/${authorId}/${excludePageId}`,
    }),

    getByList: build.query<IPage[], string>({
      query: listId => `/list/${listId}`,
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

    movePageToTrash: build.mutation<string, string>({
      query: _id => ({
        url: `/${_id}`,
        method: 'PATCH',
        body: { deleted: true },
      }),
      invalidatesTags: ['Pages'],
    }),

    restorePage: build.mutation<string, string>({
      query: _id => ({
        url: `/${_id}`,
        method: 'PATCH',
        body: { deleted: false },
      }),
      invalidatesTags: ['Pages', 'Trash'],
    }),

    uploadCover: build.mutation<string, IUploadImage>({
      query: ({ _id, file }) => ({
        url: `/files/cover/${_id}`,
        method: 'POST',
        body: file,
      }),
      invalidatesTags: ['Pages'],
    }),

    uploadIcon: build.mutation<string, IUploadImage>({
      query: ({ _id, file }) => ({
        url: `/files/icon/${_id}`,
        method: 'POST',
        body: file,
      }),
      invalidatesTags: ['Pages'],
    }),

    deletePage: build.mutation<string, string>({
      query: _id => ({
        url: `/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Trash'],
    }),

    searchPages: build.query<IPage[], { authorId: string; query: string }>({
      query: ({ authorId, query }) => `/search/${authorId}?query=${query}`,
    }),

    searchDeletedPages: build.query<IPage[], { author: string; query: string }>(
      {
        query: ({ author, query }) => `/search/trash/${author}?query=${query}`,
        providesTags: result => ['Trash'],
      }
    ),

    searchPagesToMove: build.query<
      IPage[],
      { authorId: string; excludePageId: string; query: string }
    >({
      query: ({ authorId, excludePageId, query }) =>
        `/search/move/${authorId}/${excludePageId}?query=${query}`,
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

// Main
export const {
  useCreatePageMutation,
  useGetAllPagesQuery,
  useUpdatePageMutation,
  useDeletePageMutation,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = pagesApi

// Main Lazy
export const {
  useLazyGetDeletedPagesQuery,
  useLazyGetOnePageQuery,
  useLazyGetPagesToMoveQuery,
  useLazySearchPagesQuery,
  useLazySearchDeletedPagesQuery,
  useLazySearchPagesToMoveQuery,
} = pagesApi

// Support
export const {
  useMovePageToTrashMutation,
  useRestorePageMutation,
  useUploadCoverMutation,
  useUploadIconMutation,
} = pagesApi
