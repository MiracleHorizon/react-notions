import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AlertsState from './alerts.types'

const initialState: AlertsState = {
  deletePage: {
    isOpen: false,
    pageId: '',
  },
  deleteTasksList: {
    isOpen: false,
    listId: '',
  },
  alreadyExist: {
    isOpen: false,
  },
}

const alertsSlice = createSlice({
  name: 'alerts',

  initialState,

  reducers: {
    showDeletePageAlert(state, action: PayloadAction<string>) {
      state.deletePage.isOpen = true
      state.deletePage.pageId = action.payload
    },
    showDeleteTasksListAlert(state, action: PayloadAction<string>) {
      state.deleteTasksList.isOpen = true
      state.deleteTasksList.listId = action.payload
    },
    showAlreadyExistAlert(state) {
      state.alreadyExist.isOpen = true
    },

    hideDeletePageAlert(state) {
      state.deletePage.isOpen = false
      state.deletePage.pageId = ''
    },
    hideDeleteTasksListAlert(state) {
      state.deleteTasksList.isOpen = false
      state.deleteTasksList.listId = ''
    },
    hideAlreadyExistAlert(state) {
      state.alreadyExist.isOpen = false
    },
  },
})

export const {
  showDeletePageAlert,
  showDeleteTasksListAlert,
  showAlreadyExistAlert,
  hideDeletePageAlert,
  hideDeleteTasksListAlert,
  hideAlreadyExistAlert,
} = alertsSlice.actions

export default alertsSlice.reducer
