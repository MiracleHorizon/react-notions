export default interface AlertsState {
  deletePage: DeletePageAlertState
  deleteTasksList: DeleteTasksListsAlertState
  alreadyExist: AlertInitialState
  overLimitFileSize: OverLimitFileSizeAlertState
  fillName: AlertInitialState
  notSavedChanges: NotSavedChangesAlertState
  movedToTrashTooltip: { isActive: boolean; pageId: string }
  clipboardCopyTooltip: { isActive: boolean }
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
