import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'
import TasksListsState from './tasksLists.types'
import ITasksList from 'models/tasksList/ITasksList'

import { IPage } from 'models/page/IPage'

const initialState: TasksListsState = {
  tasksLists: [],
  startItem: null,
  startList: null,
}

const tasksListsSlice = createSlice({
  name: 'tasksList',

  initialState,

  reducers: {
    setTasksLists(state, action: PayloadAction<ITasksList[]>) {
      state.tasksLists = action.payload
    },

    setStartItem(state, action: PayloadAction<IPage>) {
      state.startItem = action.payload
    },

    setStartList(state, action: PayloadAction<ITasksList>) {
      state.startList = action.payload
    },
  },
})

export const { setTasksLists, setStartList, setStartItem } =
  tasksListsSlice.actions

export const selectHiddenTasksLists = (state: RootState) =>
  state.tasksLists.tasksLists.filter(list => list.hidden)

export const selectTasksLists = (state: RootState) =>
  state.tasksLists.tasksLists
    .filter(list => !list.hidden && list.color !== 'empty')
    .sort((a, b) => a.order - b.order)

export const selectNoStatusList = (state: RootState): ITasksList => {
  return state.tasksLists.tasksLists.find(
    list => list.color === 'empty' && !list.hidden
  )!
}

export default tasksListsSlice.reducer
