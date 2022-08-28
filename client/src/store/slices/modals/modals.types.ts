import { ElementCoords } from 'types'
import IPage from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import { TPageFont } from 'models/decor/fonts'

export default interface ModalsState {
  rename: ModalWithPageState & IInvokerRect
  cover: ModalWithPageId & IInvokerRect
  icon: ModalWithPageId & IInvokerRect
  trash: ModalInitialState
  appSettings: ModalInitialState
  quickSearch: ModalInitialState
  pageOptions: ModalWithPageState & IElementCoords
  pageSettings: ModalWithPageState & IInvokerRect
  movePage: ModalWithPageId & IElementCoords
  notionTask: ModalInitialState
  tasksListOptions: TasksListOptionsModalState
  handleTasksList: HandleTasksListTitleModalState
  hiddenTasksList: ModalWithListState & IInvokerRect
  createNotionContentItem: ModalWithNotionContentItemState & IInvokerRect
  notionItemOptions: NotionContentItemOptionsModalState
  notionItemDecor: ModalWithNotionContentItemId & IInvokerRect
  webBookmark: { _id: string } & IInvokerRect & ModalInitialState
  changeStatus: ChangeStatusModalState
  dropdown: DropdownPopupState
}

export interface ModalInitialState {
  isOpen: boolean
}

export interface IInvokerRect {
  invokerRect: string
}

export interface IElementCoords {
  coords: ElementCoords
}

export interface ModalWithPageState extends ModalInitialState {
  page: IPage
}

export interface ModalWithPageId extends ModalInitialState {
  pageId: string
}

export interface ModalWithListState extends ModalInitialState {
  list: ITasksList
}

export interface ModalWithListId extends ModalInitialState {
  listId: string
}

export interface ModalWithNotionContentItemState extends ModalInitialState {
  item: INotionContentItem
  parentItemId?: string
}

export interface ModalWithNotionContentItemId extends ModalInitialState {
  itemId: string
}

// Типизация состояния всплывающих окон.
export interface DropdownPopupState {
  theme: ModalInitialState
  startOpen: ModalInitialState
}

export interface TasksListOptionsModalState
  extends ModalWithListId, IInvokerRect {
  color: string
  hidden: boolean | null
  template: 'default' | 'taskModal'
}

export interface HandleTasksListTitleModalState
  extends ModalWithListId, IInvokerRect {
  title: string
  dest: 'edit' | 'create'
}

export interface ChangeStatusModalState
  extends ModalInitialState, IInvokerRect {
  list: ITasksList
  task: IPage
}

export interface NotionContentItemOptionsModalState
  extends ModalWithPageState,
    ModalWithNotionContentItemState,
    IInvokerRect {}

// Типизация PayloadAction.
export interface DecorModalPayload extends IInvokerRect {
  pageId: string
}

export interface ModalWithPagePayload extends IInvokerRect {
  page: IPage
}

export interface IUpdatePageSettingsModalState {
  font?: TPageFont
  smallText?: boolean
  fullWidth?: boolean
  locked?: boolean
}

export interface ITasksListsOptionsModalPayload extends IInvokerRect {
  listId: string
  color: string
  hidden: boolean
  template: 'default' | 'taskModal'
}

export interface IHandleTasksListTitleModalPayload extends IInvokerRect {
  listId?: string
  title?: string
  dest: 'edit' | 'create'
}

export interface ChangeStatusModalPayload extends IInvokerRect {
  task: IPage
  list: ITasksList
}

export interface NotionContentItemOptionsModalPayload extends IInvokerRect {
  item: INotionContentItem
  page: IPage
}

export interface CreateNotionContentItemModalPayload extends IInvokerRect {
  item: INotionContentItem
  parentItemId?: string
}
