export default interface AlertsState {
  deletePage: DeletePageAlertState
  deleteTasksList: DeleteTasksListsAlertState
  alreadyExist: AlertInitialState
  overLimitFileSize: OverLimitFileSizeAlertState
  fillName: AlertInitialState
  fillEmail: AlertInitialState
  changePassword: AlertInitialState
  deleteAccount: AlertInitialState
  notSavedChanges: NotSavedChangesAlertState
  movedToTrashTooltip: { isActive: boolean; pageId: string }
  clipboardCopyTooltip: { isActive: boolean; kind: 'link' | 'property' }
}

export interface AlertInitialState {
  isOpen: boolean
}

export interface DeletePageAlertState extends AlertInitialState {
  pageId: string
}

export interface DeleteTasksListsAlertState extends AlertInitialState {
  listId: string
}

export interface NotSavedChangesAlertState extends AlertInitialState {
  fullNameValue: string
}

export interface OverLimitFileSizeAlertState extends AlertInitialState {
  dest: 'icon' | 'cover' | 'video' | 'audio'
}
