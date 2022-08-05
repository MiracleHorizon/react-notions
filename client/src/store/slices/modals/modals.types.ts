import { ElementCoords } from 'types'
import { IPage } from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'

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
  tasksListsOptions: TasksListOptionsModalState
  handleTasksList: HandleTasksListTitleModalState
  hiddenTasksList: HiddenTasksListModalState
  dropdown: DropdownPopupState
}

// Типизация состояния всплывающих окон.
export interface ModalInitialState {
  isOpen: boolean
  coords: ElementCoords
}

export interface RenamePageModalState extends ModalInitialState {
  page: IPage | null
}

export interface ChangeCoverModalState extends ModalInitialState {
  pageId: string
}

export interface ChangeIconModalState extends ModalInitialState {
  pageId: string
}

export interface PageOptionsModalState extends ModalInitialState {
  page: IPage | null
}

export interface PageSettingsModalState extends ModalInitialState {
  page: IPage | null
}

export interface MovePageModalState extends ModalInitialState {
  pageId: string
}

export interface TasksListOptionsModalState extends ModalInitialState {
  listId: string
  color: string
  hidden: boolean | null
}

export interface DropdownPopupState {
  theme: { isOpen: boolean }
  comments: { isOpen: boolean }
  startOpen: { isOpen: boolean }
}

export interface HandleTasksListTitleModalState extends ModalInitialState {
  listId: string
  title: string
  dest: 'edit' | 'create'
}

export interface HiddenTasksListModalState extends ModalInitialState {
  list: ITasksList | null
}

// Типизация PayloadAction.
export interface DecorModalPayload {
  pageId: string
  coords: ElementCoords
}

export interface PageModalPayload {
  page: IPage
  coords: ElementCoords
}
