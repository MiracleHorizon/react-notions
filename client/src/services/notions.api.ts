import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SERVER_API } from 'utils/constants/app'
import IPage from 'models/page/IPage'
import ICreatePageBody from 'models/api/pages/ICreatePageBody'
import IUpdatePageParams from 'models/api/pages/IUpdatePageParams'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'
import IUpdatePageContentItemParams from 'models/api/pageContent/IUpdatePageContentItemParams'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import IUploadImage from 'models/api/IUploadImage'
import ISearchPagesParams from 'models/api/pagination/ISearchPagesParams'
import IPagePaginationResponse from 'models/api/response/IPagePaginationResponse'
import ISearchParams from 'models/api/pagination/ISearchParams'

export const notionsApi = createApi({
  reducerPath: 'pages/api',

  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/notions`,
  }),

  tagTypes: ['Pages', 'Page', 'Trash', 'List'],

  endpoints: build => ({
    // Notion.
    createPage: build.mutation<IPage, ICreatePageBody>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pages'],
    }),

    getAllPages: build.query<IPage[], string>({
      query: userId => `/all/${userId}`,
      providesTags: () => ['Pages'],
    }),

    getByList: build.query<IPage[], string>({
      query: listId => `/list/${listId}`,
    }),

    getOnePage: build.query<IPage, string>({
      query: _id => ({
        url: `/${_id}`,
      }),
      providesTags: () => ['Pages'],
    }),

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
      invalidatesTags: ['Pages', 'List'],
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

    searchPages: build.query<IPagePaginationResponse, ISearchPagesParams>({
      query: ({ author, query, offset }) =>
        `/search/${author}?query=${query}&offset=${offset}`,
    }),

    searchDeletedPages: build.query<
      IPagePaginationResponse,
      ISearchPagesParams
    >({
      query: ({ author, query, offset }) =>
        `/search/trash/${author}?query=${query}&limit=20&offset=${offset}`,
      providesTags: () => ['Trash'],
    }),

    searchPagesByList: build.query<
      IPagePaginationResponse,
      { listId: string } & ISearchParams
    >({
      query: ({ listId, query, offset }) =>
        `/search/list/${listId}?query=${query}&limit=10&offset=${offset}`,
      providesTags: () => ['List'],
    }),

    searchPagesToMove: build.query<
      IPagePaginationResponse,
      { author: string; excludePageId: string } & ISearchParams
    >({
      query: ({ author, excludePageId, query, offset }) =>
        `/search/move/${author}/${excludePageId}?query=${query}&limit=10&offset=${offset}`,
    }),

    // Notion content items.
    createItem: build.mutation<INotionContentItem, ICreatePageContentItemBody>({
      query: body => ({
        url: `/content`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pages'],
    }),

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

// Main.
export const {
  useGetAllPagesQuery,
  useLazyGetOnePageQuery,
  useCreatePageMutation,
  useUpdatePageMutation,
  useMovePageToTrashMutation,
  useRestorePageMutation,
  useDeletePageMutation,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = notionsApi

// Search.
export const {
  useLazySearchPagesQuery,
  useLazySearchDeletedPagesQuery,
  useLazySearchPagesByListQuery,
  useLazySearchPagesToMoveQuery,
} = notionsApi

// Upload files.
export const { useUploadCoverMutation, useUploadIconMutation } = notionsApi
