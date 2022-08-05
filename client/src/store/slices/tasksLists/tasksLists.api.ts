import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ICreateTasksListBody from 'models/api/tasksLists/ICreateTasksListBody'
import IUpdateTasksListParams from 'models/api/tasksLists/IUpdateTasksListParams'
import ITasksList from 'models/tasksList/ITasksList'

export const tasksListsApi = createApi({
  reducerPath: 'tasksLists/api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/workspace/lists',
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
      providesTags: result => ['Lists'],
    }),

    updateTasksList: build.mutation<void, IUpdateTasksListParams>({
      query: ({_id, body}) => ({
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
  useUpdateTasksListMutation,
  useDeleteTasksListMutation,
} = tasksListsApi
