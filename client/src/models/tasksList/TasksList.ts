export class TasksList {
  static create = (parentPageId: string, title: string, color: string) => ({
    parentPageId,
    title,
    color
  })
}
