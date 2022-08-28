import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IDecorPaginationResponse from 'models/api/response/IDecorPaginationResponse'
import { SERVER_API } from 'utils/constants/app'

export const decorApi = createApi({
  reducerPath: 'decor/api',

  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/decor`,
  }),

  endpoints: build => ({
    getCoversLists: build.query<IDecorPaginationResponse, { offset: number }>({
      query: ({ offset }) => `/covers?limit=2&offset=${offset}`,
    }),

    getEmojiLists: build.query<IDecorPaginationResponse, { offset: number }>({
      query: ({ offset }) => `/emojis?limit=2&offset=${offset}`,
    }),
  }),
})

export const { useLazyGetCoversListsQuery, useLazyGetEmojiListsQuery } = decorApi
