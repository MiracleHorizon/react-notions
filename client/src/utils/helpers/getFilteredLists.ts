import ITasksList from 'models/tasksList/ITasksList'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

const getFilteredLists = (
  lists: ITasksList[],
  inputValue: string
): ITasksList[] => {
  return lists.filter(list => {
    return (
      list.title.toLowerCase().includes(inputValue.toLowerCase()) &&
      list.color !== TasksListTitleColorsEnum.EMPTY
    )
  })
}

export default getFilteredLists
