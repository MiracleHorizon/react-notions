import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SERVER_API } from 'utils/constants/app'
import ICreateTasksListBody from 'models/api/tasksLists/ICreateTasksListBody'
import IUpdateTasksListParams from 'models/api/tasksLists/IUpdateTasksListParams'
import ITasksList from 'models/tasksList/ITasksList'

export const tasksListsApi = createApi({
  reducerPath: 'tasksLists/api',

  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/workspace/lists`,
  }),

  tagTypes: ['Lists'], // + Tasks

  endpoints: build => ({
    createTasksList: build.mutation<void, ICreateTasksListBody>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Lists'],
    }),

    getTasksLists: build.query<ITasksList[], string>({
      query: _id => `/page/${_id}`,
      providesTags: () => ['Lists'],
    }),

    updateTasksList: build.mutation<ITasksList, IUpdateTasksListParams>({
      query: ({ _id, body }) => ({
        url: `/${_id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Lists'],
    }),

    deleteTasksList: build.mutation<void, string>({
      query: _id => ({
        url: `/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lists'],
    }),
  }),
})

export const {
  useCreateTasksListMutation,
  useGetTasksListsQuery,
  useLazyGetTasksListsQuery,
  useUpdateTasksListMutation,
  useDeleteTasksListMutation,
} = tasksListsApi
