import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SERVER_API } from 'utils/constants/app'
import IPage from 'models/page/IPage'
import ICreatePageBody from 'models/api/pages/ICreatePageBody'
import IUpdatePageParams from 'models/api/pages/IUpdatePageParams'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'
import IUpdatePageContentItemParams from 'models/api/pageContent/IUpdatePageContentItemParams'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import IUploadImage from 'models/api/IUploadImage'
import ISearchDeletedPagesParams from 'models/api/pagination/ISearchDeletedPagesParams'
import IGetDeletedPagesParams from 'models/api/pages/IGetDeletedPagesParams'
import IPagePaginationResponse from 'models/api/response/IPagePaginationResponse'

export const notionsApi = createApi({
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
      providesTags: () => ['Pages'],
    }),

    getDeletedPages: build.query<IPagePaginationResponse, IGetDeletedPagesParams>({
      query: ({ author, offset }) => ({
        url: `/user/trash/${author}?limit=20&offset=${offset}`,
      }),
      // transformResponse: (pages: IPage[], meta) => ({
      //   totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
      //   pages,
      // }),
      providesTags: () => ['Trash'],
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
      providesTags: () => ['Pages'],
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

    searchPages: build.query<IPage[], { author: string; query: string }>({
      query: ({ author, query }) => `/search/${author}?query=${query}`,
    }),

    searchDeletedPages: build.query<
      IPagePaginationResponse,
      ISearchDeletedPagesParams
    >({
      query: ({ author, query, offset }) =>
        `/search/trash/${author}?query=${query}&limit=20&offset=${offset}`,
      providesTags: () => ['Trash'],
    }),

    searchPagesByList: build.query<
      IPage[],
      { author: string; listId: string; query: string }
    >({
      query: ({ author, listId, query }) =>
        `/search/${author}/list/${listId}?query=${query}`,
    }),

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

// Main.
export const {
  useCreatePageMutation,
  useGetAllPagesQuery,
  useUpdatePageMutation,
  useDeletePageMutation,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = notionsApi

// Main lazy.
export const {
  useLazyGetDeletedPagesQuery,
  useLazyGetOnePageQuery,
  useLazyGetPagesToMoveQuery,
} = notionsApi

// Search.
export const {
  useLazySearchPagesQuery,
  useLazySearchDeletedPagesQuery,
  useLazySearchPagesByListQuery,
  useLazySearchPagesToMoveQuery,
} = notionsApi

// Support.
export const {
  useMovePageToTrashMutation,
  useRestorePageMutation,
  useUploadCoverMutation,
  useUploadIconMutation,
} = notionsApi
