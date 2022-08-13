import { RootState } from 'store'
import IPage from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'

export const selectHiddenTasksLists = (state: RootState): ITasksList[] =>
  state.tasksLists.tasksLists.filter(list => list.hidden)

export const selectTasksLists = (state: RootState): ITasksList[] =>
  state.tasksLists.tasksLists
    .filter(list => !list.hidden && list.color !== 'empty')
    .sort((a, b) => a.order - b.order)

export const selectNotHiddenNoStatusList = (
  state: RootState
): ITasksList | undefined =>
  state.tasksLists.tasksLists.find(
    list => list.color === 'empty' && !list.hidden
  )

export const selectNoStatusList = (state: RootState): ITasksList | null => {
  const list = state.tasksLists.tasksLists.find(list => list.color === 'empty')
  return list ? list : null
}

export const selectListById = (state: RootState, _id: string) =>
  state.tasksLists.tasksLists.find(list => list._id === _id)

export const selectFilteredTasks = (state: RootState, _id: string): IPage[] =>
  state.pages.pages.filter(page => page.parentListId === _id) // В страницы.

export const selectListsWithStatus = (state: RootState): ITasksList[] =>
  state.tasksLists.tasksLists.filter(list => list.title !== 'NO_STATUS')
