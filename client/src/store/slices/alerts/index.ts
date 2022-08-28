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
  alreadyExist: { isOpen: false },
  overLimitFileSize: {
    isOpen: false,
    dest: 'icon',
  },
  notSavedChanges: { isOpen: false, fullNameValue: '' },
  fillName: { isOpen: false },
  movedToTrashTooltip: {
    isActive: false,
    pageId: '',
  },
  clipboardCopyTooltip: { isActive: false },
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
    showOverLimitFileSizeAlert(
      state,
      action: PayloadAction<{ dest: 'icon' | 'cover' | 'video' | 'audio' }>
    ) {
      state.overLimitFileSize.isOpen = true
      state.overLimitFileSize.dest = action.payload.dest
    },
    showMovedToTrashTooltip(state, action: PayloadAction<string>) {
      state.movedToTrashTooltip.isActive = true
      state.movedToTrashTooltip.pageId = action.payload
    },
    showClipboardCopyTooltip(state) {
      state.clipboardCopyTooltip.isActive = true
    },
    showNotSavedChangesAlert(state, action: PayloadAction<string>) {
      state.notSavedChanges.isOpen = true
      state.notSavedChanges.fullNameValue = action.payload
    },
    showFillNameAlert(state) {
      state.fillName.isOpen = true
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
    hideOverLimitFileSizeAlert(state) {
      state.overLimitFileSize.isOpen = false
    },
    hideNotSavedChangesAlert(state) {
      state.notSavedChanges.isOpen = false
    },
    hideFillNameAlert(state) {
      state.fillName.isOpen = false
    },

    hideMovedToTrashTooltip(state) {
      state.movedToTrashTooltip.isActive = false
    },
    hideClipboardCopyTooltip(state) {
      state.clipboardCopyTooltip.isActive = false
    },
  },
})

export const {
  showDeletePageAlert,
  showDeleteTasksListAlert,
  showAlreadyExistAlert,
  showOverLimitFileSizeAlert,
  showMovedToTrashTooltip,
  showClipboardCopyTooltip,
  showNotSavedChangesAlert,
  showFillNameAlert,
  hideDeletePageAlert,
  hideDeleteTasksListAlert,
  hideAlreadyExistAlert,
  hideOverLimitFileSizeAlert,
  hideNotSavedChangesAlert,
  hideFillNameAlert,
  hideMovedToTrashTooltip,
  hideClipboardCopyTooltip,
} = alertsSlice.actions

export default alertsSlice.reducer
