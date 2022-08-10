import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ElementCoords } from 'types'
import ModalsState, {
  DecorModalPayload,
  PageModalPayload,
} from './modals.types'
import ITasksList from 'models/tasksList/ITasksList'
import IPage from 'models/page/IPage'

const initialState: ModalsState = {
  appSettings: {
    isOpen: false,
  },
  quickSearch: {
    isOpen: false,
  },
  trash: {
    isOpen: false,
  },
  pageSettings: {
    isOpen: false,
    page: null,
    invokerRect: '',
  },
  pageOptions: {
    isOpen: false,
    page: null,
    coords: {},
  },
  movePage: {
    isOpen: false,
    pageId: '',
    coords: {},
  },
  rename: {
    page: null,
    isOpen: false,
    invokerRect: '',
  },
  cover: {
    pageId: '',
    isOpen: false,
    invokerRect: '',
  },
  icon: {
    pageId: '',
    isOpen: false,
    invokerRect: '',
  },
  changeStatus: {
    isOpen: false,
    list: null,
    task: null,
    coords: {},
  },
  tasksListOptions: {
    isOpen: false,
    listId: '',
    color: '',
    hidden: null,
    invokerRect: '',
    template: null,
  },
  handleTasksList: {
    isOpen: false,
    listId: '',
    title: '',
    invokerRect: '',
    dest: 'create',
  },
  hiddenTasksList: {
    isOpen: false,
    list: null,
    invokerRect: '',
  },
  notionTask: {
    isOpen: false,
    page: null,
  },
  notionItemOptions: {
    isOpen: false,
    itemId: '',
    invokerRect: '',
  },
  notionItemDecor: {
    isOpen: false,
    itemId: '',
    invokerRect: '',
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
    openRenamePageModal(
      state,
      action: PayloadAction<{ page: IPage; invokerRect: string }>
    ) {
      state.rename.isOpen = true
      state.rename.page = action.payload.page
      state.rename.invokerRect = action.payload.invokerRect
    },
    openChangeCoverModal(state, action: PayloadAction<DecorModalPayload>) {
      state.cover.isOpen = true
      state.cover.pageId = action.payload.pageId
      state.cover.invokerRect = action.payload.invokerRect
    },
    openChangeIconModal(state, action: PayloadAction<DecorModalPayload>) {
      state.icon.isOpen = true
      state.icon.pageId = action.payload.pageId
      state.icon.invokerRect = action.payload.invokerRect
    },
    openPagesTrashModal(state) {
      state.trash.isOpen = true
    },
    openAppSettingsModal(state) {
      state.appSettings.isOpen = true
    },
    openPageOptionsModal(
      state,
      action: PayloadAction<{ page: IPage; coords: ElementCoords }>
    ) {
      state.pageOptions.isOpen = true
      state.pageOptions.page = action.payload.page
      state.pageOptions.coords = action.payload.coords
    },
    openPageSettingsModal(state, action: PayloadAction<PageModalPayload>) {
      state.pageSettings.isOpen = true
      state.pageSettings.page = action.payload.page
      state.pageSettings.invokerRect = action.payload.invokerRect
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
        invokerRect: string
        template: 'default' | 'taskModal'
      }>
    ) {
      state.tasksListOptions.isOpen = true
      state.tasksListOptions.listId = action.payload.listId
      state.tasksListOptions.color = action.payload.color
      state.tasksListOptions.hidden = action.payload.hidden
      state.tasksListOptions.invokerRect = action.payload.invokerRect
      state.tasksListOptions.template = action.payload.template
    },
    openHandleTasksListTitleModal(
      state,
      action: PayloadAction<{
        listId?: string
        title?: string
        dest: 'edit' | 'create'
        invokerRect: string
      }>
    ) {
      state.handleTasksList.isOpen = true
      state.handleTasksList.dest = action.payload.dest
      state.handleTasksList.invokerRect = action.payload.invokerRect

      if (action.payload.listId) {
        state.handleTasksList.listId = action.payload.listId
      }

      if (action.payload.title) {
        state.handleTasksList.title = action.payload.title
      }
    },
    openHiddenTasksListModal(
      state,
      action: PayloadAction<{ list: ITasksList; invokerRect: string }>
    ) {
      state.hiddenTasksList.isOpen = true
      state.hiddenTasksList.list = action.payload.list
      state.hiddenTasksList.invokerRect = action.payload.invokerRect
    },
    openQuickSearchModal(state) {
      state.quickSearch.isOpen = true
    },
    openNotionTaskModal(state, action: PayloadAction<IPage>) {
      state.notionTask.isOpen = true
      state.notionTask.page = action.payload
    },
    openChangeStatusModal(
      state,
      action: PayloadAction<{
        list: ITasksList
        task: IPage
        coords: ElementCoords
      }>
    ) {
      state.changeStatus.isOpen = true
      state.changeStatus.list = action.payload.list
      state.changeStatus.task = action.payload.task
      state.changeStatus.coords = action.payload.coords
    },
    openNotionContentItemOptionsModal(
      state,
      action: PayloadAction<{ itemId: string; invokerRect: string }>
    ) {
      state.notionItemOptions.isOpen = true
      state.notionItemOptions.itemId = action.payload.itemId
      state.notionItemOptions.invokerRect = action.payload.invokerRect
    },
    openNotionContentItemDecorModal(
      state,
      action: PayloadAction<{ itemId: string; invokerRect: string }>
    ) {
      state.notionItemDecor.isOpen = true
      state.notionItemDecor.itemId = action.payload.itemId
      state.notionItemDecor.invokerRect = action.payload.invokerRect
    },

    closeRenamePageModal(state) {
      state.rename.isOpen = false
      state.rename.page = null
      state.rename.invokerRect = ''
    },
    closeChangeCoverModal(state) {
      state.cover.isOpen = false
      state.cover.pageId = ''
      state.cover.invokerRect = ''
    },
    closeChangeIconModal(state) {
      state.icon.isOpen = false
      state.icon.pageId = ''
      state.icon.invokerRect = ''
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
      state.pageSettings.invokerRect = ''
    },
    closeMovePageModal(state) {
      state.movePage.isOpen = false
      state.movePage.pageId = ''
      state.movePage.coords = {}
    },
    closeTasksListsOptionsModal(state) {
      state.tasksListOptions.isOpen = false
      state.tasksListOptions.listId = ''
      state.tasksListOptions.color = ''
      state.tasksListOptions.hidden = null
      state.tasksListOptions.invokerRect = ''
      state.tasksListOptions.template = null
    },
    closeHandleTasksListTitleModal(state) {
      state.handleTasksList.isOpen = false
      state.handleTasksList.listId = ''
      state.handleTasksList.title = ''
      state.handleTasksList.dest = 'create'
      state.handleTasksList.invokerRect = ''
    },
    closeHiddenTasksListModal(state) {
      state.hiddenTasksList.isOpen = true
      state.hiddenTasksList.list = null
      state.hiddenTasksList.invokerRect = ''
    },
    closeQuickSearchModal(state) {
      state.quickSearch.isOpen = true
    },

    closeChangeStatusModal(state) {
      state.changeStatus.isOpen = false
      state.changeStatus.coords = {}
      state.changeStatus.list = null
      state.changeStatus.task = null
    },
    closeNotionTaskModal(state) {
      state.notionTask.isOpen = false
      state.notionTask.page = null
    },

    closeNotionContentItemOptionsModal(state) {
      state.notionItemOptions.isOpen = false
      state.notionItemOptions.itemId = ''
      state.notionItemOptions.invokerRect = ''
    },
    closeNotionContentItemDecorModal(state) {
      state.notionItemDecor.isOpen = false
      state.notionItemDecor.itemId = ''
      state.notionItemDecor.invokerRect = ''
    },

    toggleAppSettingsModal(state) {
      state.appSettings.isOpen = !state.appSettings.isOpen
    },
    toggleQuickSearchModal(state) {
      state.quickSearch.isOpen = !state.quickSearch.isOpen
    },

    setTasksListsOptionsModalColor(state, action: PayloadAction<string>) {
      state.tasksListOptions.color = action.payload
    },

    updateNotionTaskModalState(state, action: PayloadAction<IPage>) {
      state.notionTask.isOpen = true
      state.notionTask.page = action.payload
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
  openNotionTaskModal,
  openChangeStatusModal,
  openNotionContentItemOptionsModal,
  openNotionContentItemDecorModal,
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
  closeNotionTaskModal,
  closeChangeStatusModal,
  closeNotionContentItemOptionsModal,
  closeNotionContentItemDecorModal,
  setTasksListsOptionsModalColor,
  openDropdown,
  closeDropdown,
  toggleAppSettingsModal,
  toggleQuickSearchModal,
  updateNotionTaskModalState,
} = modalsSlice.actions

export default modalsSlice.reducer
