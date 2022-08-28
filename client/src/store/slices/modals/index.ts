import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ModalsState, {
  ChangeStatusModalPayload,
  CreateNotionContentItemModalPayload,
  DecorModalPayload,
  IElementCoords,
  IHandleTasksListTitleModalPayload,
  IInvokerRect,
  ITasksListsOptionsModalPayload,
  IUpdatePageSettingsModalState,
  ModalWithPagePayload,
  NotionContentItemOptionsModalPayload,
} from './modals.types'
import ITasksList from 'models/tasksList/ITasksList'
import IPage from 'models/page/IPage'
import INotionContentItem from 'models/pageContent/INotionContentItem'

const initialState: ModalsState = {
  appSettings: { isOpen: false },
  quickSearch: { isOpen: false },
  trash: { isOpen: false },
  pageSettings: {
    isOpen: false,
    invokerRect: '',
    page: {} as IPage,
  },
  pageOptions: {
    isOpen: false,
    coords: {},
    page: {} as IPage,
  },
  movePage: {
    isOpen: false,
    coords: {},
    pageId: '',
  },
  rename: {
    isOpen: false,
    invokerRect: '',
    page: {} as IPage,
  },
  cover: {
    isOpen: false,
    invokerRect: '',
    pageId: '',
  },
  icon: {
    isOpen: false,
    invokerRect: '',
    pageId: '',
  },
  changeStatus: {
    isOpen: false,
    invokerRect: '',
    list: {} as ITasksList,
    task: {} as IPage,
  },
  tasksListOptions: {
    isOpen: false,
    invokerRect: '',
    listId: '',
    color: '',
    hidden: null,
    template: 'default',
  },
  handleTasksList: {
    isOpen: false,
    invokerRect: '',
    listId: '',
    title: '',
    dest: 'create',
  },
  hiddenTasksList: {
    isOpen: false,
    invokerRect: '',
    list: {} as ITasksList,
  },
  notionTask: { isOpen: false },
  notionItemOptions: {
    isOpen: false,
    invokerRect: '',
    page: {} as IPage,
    item: {} as INotionContentItem
  },
  notionItemDecor: {
    isOpen: false,
    invokerRect: '',
    itemId: '',
  },
  createNotionContentItem: {
    isOpen: false,
    invokerRect: '',
    item: {} as INotionContentItem,
  },
  webBookmark: {
    isOpen: false,
    invokerRect: '',
    _id: '',
  },
  dropdown: {
    theme: { isOpen: false },
    startOpen: { isOpen: false },
  },
}

const modalsSlice = createSlice({
  name: 'modals',

  initialState,

  reducers: {
    openNotionTaskModal(state) {
      state.notionTask.isOpen = true
    },
    openQuickSearchModal(state) {
      state.quickSearch.isOpen = true
    },
    openAppSettingsModal(state) {
      state.appSettings.isOpen = true
    },
    openPagesTrashModal(state) {
      state.trash.isOpen = true
    },
    openMovePageModal(
      state,
      action: PayloadAction<{ pageId: string } & IElementCoords>
    ) {
      state.movePage.isOpen = true
      state.movePage.pageId = action.payload.pageId
      state.movePage.coords = action.payload.coords
    },
    openRenamePageModal(state, action: PayloadAction<ModalWithPagePayload>) {
      state.rename.isOpen = true
      state.rename.invokerRect = action.payload.invokerRect
      state.rename.page = action.payload.page
    },
    openPageSettingsModal(state, action: PayloadAction<ModalWithPagePayload>) {
      state.pageSettings.isOpen = true
      state.pageSettings.invokerRect = action.payload.invokerRect
      state.pageSettings.page = action.payload.page
    },
    openPageOptionsModal(
      state,
      action: PayloadAction<{ page: IPage } & IElementCoords>
    ) {
      state.pageOptions.isOpen = true
      state.pageOptions.page = action.payload.page
      state.pageOptions.coords = action.payload.coords
    },
    openChangeCoverModal(state, action: PayloadAction<DecorModalPayload>) {
      state.cover.isOpen = true
      state.cover.invokerRect = action.payload.invokerRect
      state.cover.pageId = action.payload.pageId
    },
    openChangeIconModal(state, action: PayloadAction<DecorModalPayload>) {
      state.icon.isOpen = true
      state.icon.invokerRect = action.payload.invokerRect
      state.icon.pageId = action.payload.pageId
    },
    openChangeStatusModal(
      state,
      action: PayloadAction<ChangeStatusModalPayload>
    ) {
      state.changeStatus.isOpen = true
      state.changeStatus.list = action.payload.list
      state.changeStatus.task = action.payload.task
      state.changeStatus.invokerRect = action.payload.invokerRect
    },
    openTasksListsOptionsModal(
      state,
      action: PayloadAction<ITasksListsOptionsModalPayload>
    ) {
      state.tasksListOptions.isOpen = true
      state.tasksListOptions.listId = action.payload.listId
      state.tasksListOptions.color = action.payload.color
      state.tasksListOptions.hidden = action.payload.hidden
      state.tasksListOptions.invokerRect = action.payload.invokerRect
      state.tasksListOptions.template = action.payload.template
    },
    openHiddenTasksListModal(
      state,
      action: PayloadAction<{ list: ITasksList } & IInvokerRect>
    ) {
      state.hiddenTasksList.isOpen = true
      state.hiddenTasksList.list = action.payload.list
      state.hiddenTasksList.invokerRect = action.payload.invokerRect
    },
    openHandleTasksListTitleModal(
      state,
      action: PayloadAction<IHandleTasksListTitleModalPayload>
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
    openCreateNotionContentItemModal(
      state,
      action: PayloadAction<CreateNotionContentItemModalPayload>
    ) {
      state.createNotionContentItem.isOpen = true
      state.createNotionContentItem.item = action.payload.item
      state.createNotionContentItem.parentItemId = action.payload.parentItemId
      state.createNotionContentItem.invokerRect = action.payload.invokerRect
    },
    openNotionContentItemOptionsModal(
      state,
      action: PayloadAction<NotionContentItemOptionsModalPayload>
    ) {
      state.notionItemOptions.isOpen = true
      state.notionItemOptions.invokerRect = action.payload.invokerRect
      state.notionItemOptions.page = action.payload.page
      state.notionItemOptions.item = action.payload.item
    },
    openNotionContentItemDecorModal(
      state,
      action: PayloadAction<{ itemId: string } & IInvokerRect>
    ) {
      state.notionItemDecor.isOpen = true
      state.notionItemDecor.itemId = action.payload.itemId
      state.notionItemDecor.invokerRect = action.payload.invokerRect
    },
    openCreateWebBookmarkModal(
      state,
      payload: PayloadAction<{ _id: string } & IInvokerRect>
    ) {
      state.webBookmark.isOpen = true
      state.webBookmark.invokerRect = payload.payload.invokerRect
      state.webBookmark._id = payload.payload._id
    },
    openDropdown(state, action: PayloadAction<'theme' | 'startOpen'>) {
      switch (action.payload) {
        case 'theme':
          state.dropdown.theme.isOpen = true
          break
        case 'startOpen':
          state.dropdown.startOpen.isOpen = true
          break
      }
    },

    closeNotionTaskModal(state) {
      state.notionTask.isOpen = false
    },
    closeQuickSearchModal(state) {
      state.quickSearch.isOpen = false
    },
    closeAppSettingsModal(state) {
      state.appSettings.isOpen = false
    },
    closePagesTrashModal(state) {
      state.trash.isOpen = false
    },
    closeMovePageModal(state) {
      state.movePage.isOpen = false
    },
    closeRenamePageModal(state) {
      state.rename.isOpen = false
    },
    closePageSettingsModal(state) {
      state.pageSettings.isOpen = false
    },
    closePageOptionsModal(state) {
      state.pageOptions.isOpen = false
    },
    closeChangeCoverModal(state) {
      state.cover.isOpen = false
    },
    closeChangeIconModal(state) {
      state.icon.isOpen = false
    },
    closeChangeStatusModal(state) {
      state.changeStatus.isOpen = false
    },
    closeTasksListsOptionsModal(state) {
      state.tasksListOptions.isOpen = false
    },
    closeHiddenTasksListModal(state) {
      state.hiddenTasksList.isOpen = false
    },
    closeHandleTasksListTitleModal(state) {
      state.handleTasksList.isOpen = false
    },
    closeCreateNotionContentItemModal(state) {
      state.createNotionContentItem.isOpen = false
    },
    closeNotionContentItemOptionsModal(state) {
      state.notionItemOptions.isOpen = false
    },
    closeNotionContentItemDecorModal(state) {
      state.notionItemDecor.isOpen = false
    },
    closeCreateWebBookmarkModal(state) {
      state.webBookmark.isOpen = false
    },
    closeDropdown(state, action: PayloadAction<'theme' | 'startOpen'>) {
      switch (action.payload) {
        case 'theme':
          state.dropdown.theme.isOpen = false
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
      state.tasksListOptions.color = action.payload
    },

    updatePageSettingsModalState(
      state,
      action: PayloadAction<IUpdatePageSettingsModalState>
    ) {
      if (!state.pageSettings.page) return

      if (action.payload.font) {
        state.pageSettings.page.font = action.payload.font
      }

      if (action.payload.smallText !== undefined) {
        state.pageSettings.page.smallText = action.payload.smallText
      }

      if (action.payload.fullWidth !== undefined) {
        state.pageSettings.page.fullWidth = action.payload.fullWidth
      }

      if (action.payload.locked !== undefined) {
        state.pageSettings.page.locked = action.payload.locked
      }
    },
  },
})

export const {
  openNotionTaskModal,
  openQuickSearchModal,
  openAppSettingsModal,
  openPagesTrashModal,
  openMovePageModal,
  openRenamePageModal,
  openPageSettingsModal,
  openPageOptionsModal,
  openChangeCoverModal,
  openChangeIconModal,
  openChangeStatusModal,
  openTasksListsOptionsModal,
  openHiddenTasksListModal,
  openHandleTasksListTitleModal,
  openCreateNotionContentItemModal,
  openNotionContentItemOptionsModal,
  openNotionContentItemDecorModal,
  openCreateWebBookmarkModal,
  openDropdown,
  closeNotionTaskModal,
  closeQuickSearchModal,
  closeAppSettingsModal,
  closePagesTrashModal,
  closeMovePageModal,
  closeRenamePageModal,
  closePageSettingsModal,
  closePageOptionsModal,
  closeChangeCoverModal,
  closeChangeIconModal,
  closeChangeStatusModal,
  closeTasksListsOptionsModal,
  closeHiddenTasksListModal,
  closeHandleTasksListTitleModal,
  closeCreateNotionContentItemModal,
  closeNotionContentItemOptionsModal,
  closeNotionContentItemDecorModal,
  closeCreateWebBookmarkModal,
  closeDropdown,
  toggleAppSettingsModal,
  toggleQuickSearchModal,
  setTasksListsOptionsModalColor,
  updatePageSettingsModalState,
} = modalsSlice.actions

export default modalsSlice.reducer
