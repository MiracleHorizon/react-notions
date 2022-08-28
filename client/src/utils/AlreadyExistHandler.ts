import ITasksList from 'models/tasksList/ITasksList'

export default class AlreadyExistHandler {
  static handleCreate(title: string, lists: ITasksList[]): boolean {
    return Boolean(lists.find(list => list.title === title.trim()))
  }

  static handleEdit(title: string, _id: string, lists: ITasksList[]): boolean {
    return Boolean(lists.find(list => list.title === title.trim() && list._id !== _id))
  }
}
