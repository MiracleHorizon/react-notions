import ITasksList from 'models/tasksList/ITasksList'

export default class AlreadyExistHandler {
  public static handleCreate(title: string, lists: ITasksList[]): boolean {
    return Boolean(lists.find(list => list.title === title.trim()))
  }

  public static handleEdit(title: string, _id: string, lists: ITasksList[]): boolean {
    return Boolean(lists.find(list => list.title === title.trim() && list._id !== _id))
  }
}
