import { RootState } from 'store'
import ITasksList from 'models/tasksList/ITasksList'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export class TasksListsSelector {
  static selectLists(state: RootState): ITasksList[] {
    return state.tasksLists.lists
      .filter(list => !list.hidden && list.color !== TasksListTitleColorsEnum.EMPTY)
      .sort((a, b) => a.order - b.order)
  }

  static selectHiddenLists(state: RootState): ITasksList[] {
    return state.tasksLists.lists.filter(list => list.hidden)
  }

  static selectNoStatusList(state: RootState): ITasksList | null {
    const list = state.tasksLists.lists.find(list => {
      return list.color === TasksListTitleColorsEnum.EMPTY
    })

    return list ? list : null
  }

  static selectListById(state: RootState, _id: string | null): ITasksList | undefined {
    return state.tasksLists.lists.find(list => list._id === _id)
  }
}
