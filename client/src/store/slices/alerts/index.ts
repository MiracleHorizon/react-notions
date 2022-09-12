import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AlertsState from './alerts.types'
import { RootState } from 'store'

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
  fillName: { isOpen: false },
  fillEmail: { isOpen: false },
  changePassword: { isOpen: false },
  deleteAccount: { isOpen: false },
  notSavedChanges: { isOpen: false, fullNameValue: '' },
  movedToTrashTooltip: {
    isActive: false,
    pageId: '',
  },
  clipboardCopyTooltip: { isActive: false, kind: 'property' },
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
    showFillNameAlert(state) {
      state.fillName.isOpen = true
    },
    showFillEmailAlert(state) {
      state.fillEmail.isOpen = true
    },
    showChangePasswordAlert(state) {
      state.changePassword.isOpen = true
    },
    showDeleteAccountAlert(state) {
      state.deleteAccount.isOpen = true
    },
    showNotSavedChangesAlert(state, action: PayloadAction<string>) {
      state.notSavedChanges.isOpen = true
      state.notSavedChanges.fullNameValue = action.payload
    },

    showMovedToTrashTooltip(state, action: PayloadAction<string>) {
      state.movedToTrashTooltip.isActive = true
      state.movedToTrashTooltip.pageId = action.payload
    },
    showClipboardCopyTooltip(
      state,
      action: PayloadAction<{ kind: 'link' | 'property' }>
    ) {
      state.clipboardCopyTooltip.kind = action.payload.kind
      state.clipboardCopyTooltip.isActive = true
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
    hideFillNameAlert(state) {
      state.fillName.isOpen = false
    },
    hideFillEmailAlert(state) {
      state.fillEmail.isOpen = false
    },
    hideChangePasswordAlert(state) {
      state.changePassword.isOpen = false
    },
    hideDeleteAccountAlert(state) {
      state.deleteAccount.isOpen = false
    },
    hideNotSavedChangesAlert(state) {
      state.notSavedChanges.isOpen = false
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
  showFillNameAlert,
  showFillEmailAlert,
  showChangePasswordAlert,
  showDeleteAccountAlert,
  showNotSavedChangesAlert,
  showMovedToTrashTooltip,
  showClipboardCopyTooltip,
  hideDeletePageAlert,
  hideDeleteTasksListAlert,
  hideAlreadyExistAlert,
  hideOverLimitFileSizeAlert,
  hideFillNameAlert,
  hideFillEmailAlert,
  hideChangePasswordAlert,
  hideDeleteAccountAlert,
  hideNotSavedChangesAlert,
  hideMovedToTrashTooltip,
  hideClipboardCopyTooltip,
} = alertsSlice.actions

export default alertsSlice.reducer

export const selectDeleteAccountAlertClosable = (state: RootState): boolean => {
  const {
    alerts: {
      fillEmail: { isOpen: isFillEmailAlertOpen },
    },
    modals: {
      quickSearch: { isOpen: isQuickSearchModalOpen },
    },
  } = state

  return !isFillEmailAlertOpen && !isQuickSearchModalOpen
}
