export default class Page {
  static create = () => ({
    parentPageId: null,
    parentListId: null,
    title: '',
    status: null,
  })

  static createDependence = (parentPageId: string) => ({
    parentPageId,
    parentListId: null,
    title: '',
    status: null,
  })

  static createTask = (
    parentPageId: string,
    parentListId: string,
    title?: string
  ) => ({
    parentPageId,
    parentListId,
    title: title ? title : '',
    status: parentListId,
  })
}
