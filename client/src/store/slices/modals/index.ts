import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ElementCoords } from 'types'
import ModalsState, {
  DecorModalPayload,
  PageModalPayload,
} from './modals.types'
import ITasksList from 'models/tasksList/ITasksList'

const initialState: ModalsState = {
  rename: {
    page: null,
    isOpen: false,
    coords: {},
  },
  cover: {
    pageId: '',
    isOpen: false,
    coords: {},
  },
  icon: {
    pageId: '',
    isOpen: false,
    coords: {},
  },
  trash: {
    isOpen: false,
  },
  appSettings: {
    isOpen: false,
  },
  quickSearch: {
    isOpen: false
  },
  pageOptions: {
    isOpen: false,
    page: null,
    coords: {},
  },
  pageSettings: {
    isOpen: false,
    page: null,
    coords: {},
  },
  movePage: {
    isOpen: false,
    pageId: '',
    coords: {},
  },
  tasksListsOptions: {
    isOpen: false,
    listId: '',
    color: '',
    hidden: null,
    coords: {},
  },
  handleTasksList: {
    isOpen: false,
    listId: '',
    title: '',
    dest: 'create',
    coords: {},
  },
  hiddenTasksList: {
    isOpen: false,
    coords: {},
    list: null,
  },
  dropdown: {
    theme: { isOpen: false },
    comments: { isOpen: false },
    startOpen: { isOpen: false },
  },
}

const modalsSlice = createSlice({
  name: 'modals',

  initialState,

  reducers: {
    openRenamePageModal(state, action: PayloadAction<PageModalPayload>) {
      state.rename.isOpen = true
      state.rename.page = action.payload.page
      state.rename.coords = action.payload.coords
    },
    openChangeCoverModal(state, action: PayloadAction<DecorModalPayload>) {
      state.cover.isOpen = true
      state.cover.pageId = action.payload.pageId
      state.cover.coords = action.payload.coords
    },
    openChangeIconModal(state, action: PayloadAction<DecorModalPayload>) {
      state.icon.isOpen = true
      state.icon.pageId = action.payload.pageId
      state.icon.coords = action.payload.coords
    },
    openPagesTrashModal(state) {
      state.trash.isOpen = true
    },
    openAppSettingsModal(state) {
      state.appSettings.isOpen = true
    },
    openPageOptionsModal(state, action: PayloadAction<PageModalPayload>) {
      state.pageOptions.isOpen = true
      state.pageOptions.page = action.payload.page
      state.pageOptions.coords = action.payload.coords
    },
    openPageSettingsModal(state, action: PayloadAction<PageModalPayload>) {
      state.pageSettings.isOpen = true
      state.pageSettings.page = action.payload.page
      state.pageSettings.coords = action.payload.coords
    },
    openMovePageModal(
      state,
      action: PayloadAction<{ pageId: string; coords: ElementCoords }>
    ) {
      state.movePage.isOpen = true
      state.movePage.pageId = action.payload.pageId
      state.movePage.coords = action.payload.coords
    },
    openTasksListsOptionsModal(
      state,
      action: PayloadAction<{
        listId: string
        color: string
        hidden: boolean
        coords: ElementCoords
      }>
    ) {
      state.tasksListsOptions.isOpen = true
      state.tasksListsOptions.listId = action.payload.listId
      state.tasksListsOptions.color = action.payload.color
      state.tasksListsOptions.hidden = action.payload.hidden
      state.tasksListsOptions.coords = action.payload.coords
    },
    openHandleTasksListTitleModal(
      state,
      action: PayloadAction<{
        listId?: string
        title?: string
        dest: 'edit' | 'create'
        coords: ElementCoords
      }>
    ) {
      state.handleTasksList.isOpen = true
      state.handleTasksList.dest = action.payload.dest
      state.handleTasksList.coords = action.payload.coords

      if (action.payload.listId) {
        state.handleTasksList.listId = action.payload.listId
      }

      if (action.payload.title) {
        state.handleTasksList.title = action.payload.title
      }
    },
    openHiddenTasksListModal(
      state,
      action: PayloadAction<{ list: ITasksList; coords: ElementCoords }>
    ) {
      state.hiddenTasksList.isOpen = true
      state.hiddenTasksList.list = action.payload.list
      state.hiddenTasksList.coords = action.payload.coords
    },
    openQuickSearchModal(state) {
      state.quickSearch.isOpen = true
    },
    openDropdown(
      state,
      action: PayloadAction<'theme' | 'comments' | 'startOpen'>
    ) {
      switch (action.payload) {
        case 'theme':
          state.dropdown.theme.isOpen = true
          break
        case 'comments':
          state.dropdown.comments.isOpen = true
          break
        case 'startOpen':
          state.dropdown.startOpen.isOpen = true
          break
      }
    },

    closeRenamePageModal(state) {
      state.rename.isOpen = false
      state.rename.page = null
      state.rename.coords = {}
    },
    closeChangeCoverModal(state) {
      state.cover.isOpen = false
      state.cover.pageId = ''
      state.cover.coords = {}
    },
    closeChangeIconModal(state) {
      state.icon.isOpen = false
      state.icon.pageId = ''
      state.icon.coords = {}
    },
    closePagesTrashModal(state) {
      state.trash.isOpen = false
    },
    closeAppSettingsModal(state) {
      state.appSettings.isOpen = false
    },
    closePageOptionsModal(state) {
      state.pageOptions.isOpen = false
      state.pageOptions.page = null
      state.pageOptions.coords = {}
    },
    closePageSettingsModal(state) {
      state.pageSettings.isOpen = false
      state.pageSettings.page = null
      state.pageSettings.coords = {}
    },
    closeMovePageModal(state) {
      state.movePage.isOpen = false
      state.movePage.pageId = ''
      state.movePage.coords = {}
    },
    closeTasksListsOptionsModal(state) {
      state.tasksListsOptions.isOpen = false
      state.tasksListsOptions.listId = ''
      state.tasksListsOptions.color = ''
      state.tasksListsOptions.hidden = null
      state.tasksListsOptions.coords = {}
    },
    closeHandleTasksListTitleModal(state) {
      state.handleTasksList.isOpen = false
      state.handleTasksList.listId = ''
      state.handleTasksList.title = ''
      state.handleTasksList.dest = 'create'
      state.handleTasksList.coords = {}
    },
    closeHiddenTasksListModal(state) {
      state.hiddenTasksList.isOpen = true
      state.hiddenTasksList.list = null
      state.hiddenTasksList.coords = {}
    },
    closeQuickSearchModal(state) {
      state.quickSearch.isOpen = true
    },
    closeDropdown(
      state,
      action: PayloadAction<'theme' | 'comments' | 'startOpen'>
    ) {
      switch (action.payload) {
        case 'theme':
          state.dropdown.theme.isOpen = false
          break
        case 'comments':
          state.dropdown.comments.isOpen = false
          break
        case 'startOpen':
          state.dropdown.startOpen.isOpen = false
          break
      }
    },

    toggleAppSettingsModal(state) {
      state.appSettings.isOpen = !state.appSettings.isOpen
    },
    toggleQuickSearchModal(state) {
      state.quickSearch.isOpen = !state.quickSearch.isOpen
    },

    setTasksListsOptionsModalColor(state, action: PayloadAction<string>) {
      state.tasksListsOptions.color = action.payload
    },
  },
})

export const {
  openRenamePageModal,
  openChangeCoverModal,
  openChangeIconModal,
  openPagesTrashModal,
  openAppSettingsModal,
  openPageOptionsModal,
  openPageSettingsModal,
  openMovePageModal,
  openTasksListsOptionsModal,
  openHandleTasksListTitleModal,
  openHiddenTasksListModal,
  openQuickSearchModal,
  closeRenamePageModal,
  closeChangeCoverModal,
  closeChangeIconModal,
  closePagesTrashModal,
  closeAppSettingsModal,
  closePageOptionsModal,
  closePageSettingsModal,
  closeMovePageModal,
  closeTasksListsOptionsModal,
  closeHandleTasksListTitleModal,
  closeHiddenTasksListModal,
  closeQuickSearchModal,
  setTasksListsOptionsModalColor,
  openDropdown,
  closeDropdown,
  toggleAppSettingsModal,
  toggleQuickSearchModal,
} = modalsSlice.actions

export default modalsSlice.reducer
