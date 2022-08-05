export class Page {
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

  static createTask = (parentPageId: string, parentListId: string) => ({
    parentPageId,
    parentListId,
    title: '',
    status: parentListId,
  })

  static createNoStatusTask = (parentPageId: string) => ({
    parentPageId,
    parentListId: null,
    title: '',
    status: 'NO_STATUS',
  })
}
