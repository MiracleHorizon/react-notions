import { ElementCoords } from 'types'
import IPage from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import { TPageFont } from 'models/decor/fonts'

export default interface ModalsState {
  rename: RenamePageModalState
  cover: ChangeCoverModalState
  icon: ChangeIconModalState
  trash: { isOpen: boolean }
  appSettings: { isOpen: boolean }
  quickSearch: { isOpen: boolean }
  pageOptions: PageOptionsModalState
  pageSettings: PageSettingsModalState
  movePage: MovePageModalState
  tasksListOptions: TasksListOptionsModalState
  handleTasksList: HandleTasksListTitleModalState
  hiddenTasksList: HiddenTasksListModalState
  notionTask: {
    isOpen: boolean
    page: IPage | null
  }
  notionItemOptions: {
    isOpen: boolean
    _id: string
    type: NotionContentItemTypes
    invokerRect: string
  }
  notionItemDecor: {
    isOpen: boolean
    itemId: string
    invokerRect: string
  }
  changeStatus: {
    isOpen: boolean
    list: ITasksList | null // Дополнить все подобные поля * ... | null *.
    task: IPage | null
    invokerRect: string
  }
  createNotionContentItem: {
    isOpen: boolean
    invokerRect: string
    item: INotionContentItem | null
    parentItemId?: string
  }
  webBookmark: {
    isOpen: boolean
    _id: string
    invokerRect: string
  }
  dropdown: DropdownPopupState
}

// Типизация состояния всплывающих окон.
export interface ModalInitialState {
  isOpen: boolean
}

export interface IInvokerRect {
  invokerRect: string
}

export interface IElementCoords {
  coords: ElementCoords
}

export interface RenamePageModalState extends ModalInitialState, IInvokerRect {
  page: IPage | null
}

export interface ChangeCoverModalState extends ModalInitialState, IInvokerRect {
  pageId: string
}

export interface ChangeIconModalState extends ModalInitialState, IInvokerRect {
  pageId: string
}

export interface PageOptionsModalState
  extends ModalInitialState,
    IElementCoords {
  page: IPage | null
}

export interface PageSettingsModalState
  extends ModalInitialState,
    IInvokerRect {
  page: IPage | null
  invokerRect: string
}

export interface MovePageModalState extends ModalInitialState, IElementCoords {
  pageId: string
}

export interface TasksListOptionsModalState
  extends ModalInitialState,
    IInvokerRect {
  listId: string
  color: string
  hidden: boolean | null
  template: 'default' | 'taskModal' | null
}

export interface DropdownPopupState {
  theme: { isOpen: boolean }
  startOpen: { isOpen: boolean }
}

export interface HandleTasksListTitleModalState
  extends ModalInitialState,
    IInvokerRect {
  listId: string
  title: string
  dest: 'edit' | 'create'
}

export interface HiddenTasksListModalState
  extends ModalInitialState,
    IInvokerRect {
  list: ITasksList | null
}

// Типизация PayloadAction.
export interface DecorModalPayload extends IInvokerRect {
  pageId: string
}

export interface PageModalPayload extends IInvokerRect {
  page: IPage
}

export interface IUpdatePageSettingsModalState {
  font?: TPageFont
  smallText?: boolean
  fullWidth?: boolean
  locked?: boolean
}
