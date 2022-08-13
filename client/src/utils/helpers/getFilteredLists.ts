import ITasksList from 'models/tasksList/ITasksList'

const getFilteredLists = (
  lists: ITasksList[],
  inputValue: string
): ITasksList[] =>
  lists.filter(
    list =>
      list.title.toLowerCase().includes(inputValue.toLowerCase()) &&
      list.color !== 'empty'
  )

export default getFilteredLists
