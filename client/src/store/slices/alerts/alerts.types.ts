export default interface AlertsState {
  deletePage: DeletePageAlertState
  deleteTasksList: DeleteTasksListsAlertState
  alreadyExist: AlertInitialState
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
