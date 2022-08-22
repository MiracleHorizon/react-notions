import { RootState } from 'store'
import IPage from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export const selectHiddenTasksLists = (state: RootState): ITasksList[] =>
  state.tasksLists.tasksLists.filter(list => list.hidden)

export const selectTasksLists = (state: RootState): ITasksList[] => {
  return state.tasksLists.tasksLists
    .filter(
      list => !list.hidden && list.color !== TasksListTitleColorsEnum.EMPTY
    )
    .sort((a, b) => a.order - b.order)
}

export const selectNotHiddenNoStatusList = (
  state: RootState
): ITasksList | undefined => {
  return state.tasksLists.tasksLists.find(
    list => list.color === TasksListTitleColorsEnum.EMPTY && !list.hidden
  )
}

export const selectNoStatusList = (state: RootState): ITasksList | null => {
  const list = state.tasksLists.tasksLists.find(
    list => list.color === TasksListTitleColorsEnum.EMPTY
  )
  return list ? list : null
}

export const selectListById = (
  state: RootState,
  _id: string | null
): ITasksList | undefined => {
  return state.tasksLists.tasksLists.find(list => list._id === _id)
}
