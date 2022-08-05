import ITasksList from 'models/tasksList/ITasksList'

export default class AlreadyExistHandler {
  static create(title: string, lists: ITasksList[]): boolean {
    return Boolean(lists.find(list => list.title === title.trim()))
  }

  static edit(title: string, _id: string, lists: ITasksList[]): boolean {
    return Boolean(
      lists.find(list => list.title === title.trim() && list._id !== _id)
    )
  }
}
