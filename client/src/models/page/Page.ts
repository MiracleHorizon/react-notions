export default class Page {
  static create = () => ({
    parentPageId: null,
    parentListId: null,
    title: 'Untitled',
    status: null,
  })

  static createDependence = (parentPageId: string) => ({
    parentPageId,
    parentListId: null,
    title: 'Untitled',
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

  static createNoStatusTask = (parentPageId: string) => ({
    parentPageId,
    parentListId: null,
    title: '',
    status: 'NO_STATUS',
  })
}
