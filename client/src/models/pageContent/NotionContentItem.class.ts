import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'
import IUpdatePageContentItemParams from 'models/api/pageContent/IUpdatePageContentItemParams'

interface CreateParams {
  parentPageId: string
  parentItemId?: string
  order?: number
}

interface CreateDefaultParams extends CreateParams {
  type: NotionContentItemTypes
  completed?: boolean
  expanded?: boolean
  pageId?: string
  iconUrl?: string | null
  order?: number
}

const toggleTypes = [
  NotionContentItemTypes.TGL_H1,
  NotionContentItemTypes.TGL_H2,
  NotionContentItemTypes.TGL_H3,
  NotionContentItemTypes.TGL_LIST,
]

export default class NotionContentItem {
  static create = ({
    parentPageId,
    parentItemId,
    type,
    order,
    pageId,
    iconUrl,
  }: CreateDefaultParams): ICreatePageContentItemBody => {
    const item = {
      parentPageId,
      type,
      content: '',
      color: NotionContentItemColorsEnum.DEFAULT,
      bgColor: NotionContentItemColorsEnum.DEFAULT,
      expanded: null,
      completed: null,
      // pageId: pageId ? pageId : null,
      // iconUrl: iconUrl ? iconUrl : null,
    } as ICreatePageContentItemBody

    item.parentItemId = parentItemId ? parentItemId : null

    if (toggleTypes.includes(type)) {
      item.expanded = false
    }

    if (type === NotionContentItemTypes.TODO) {
      item.completed = false
    }

    if (order !== undefined) item.order = order

    return item
  }

  static update(
    type: NotionContentItemTypes,
    _id: string,
    parentItemId?: string,
    pageId?: string,
    iconUrl?: string | null
  ) {
    switch (type) {
      case NotionContentItemTypes.TODO:
        return this.updateToTodo(_id, parentItemId)
      case NotionContentItemTypes.H1:
        return this.updateToHeading(_id, 1, parentItemId)
      case NotionContentItemTypes.H2:
        return this.updateToHeading(_id, 2, parentItemId)
      case NotionContentItemTypes.H3:
        return this.updateToHeading(_id, 3, parentItemId)
      case NotionContentItemTypes.PAGE_URL:
        return this.updateToPageUrl(_id, iconUrl!, pageId!, parentItemId)
      case NotionContentItemTypes.TGL_H1:
        return this.updateToToggleHeading(_id, 1, parentItemId)
      case NotionContentItemTypes.TGL_H2:
        return this.updateToToggleHeading(_id, 2, parentItemId)
      case NotionContentItemTypes.TGL_H3:
        return this.updateToToggleHeading(_id, 3, parentItemId)
      case NotionContentItemTypes.QUOTE:
        return this.updateToQuote(_id, parentItemId)
      case NotionContentItemTypes.WEB_BOOKMARK:
        return this.updateToWebBookmark(_id, parentItemId)
      case NotionContentItemTypes.DIVIDER:
        return this.updateToDivider(_id, parentItemId)
      default:
        // throw new Error('')
        return this.updateToQuote(_id, parentItemId)
    }
  }

  static createText(
    parentPageId: string,
    parentItemId?: string,
    order?: number
  ): ICreatePageContentItemBody {
    const body = {
      parentPageId,
      parentItemId: parentItemId ? parentItemId : null,
      type: NotionContentItemTypes.TEXT,
      content: '',
      color: NotionContentItemColorsEnum.DEFAULT,
      bgColor: NotionContentItemColorsEnum.DEFAULT,
      completed: null,
      expanded: null,
      iconUrl: null,
      pageId: null,
    } as ICreatePageContentItemBody

    if (order !== undefined) body.order = order

    return body
  }

  private static updateToPageUrl(
    _id: string,
    iconUrl: string | null,
    pageId: string,
    parentItemId?: string
  ): IUpdatePageContentItemParams {
    const data = {
      type: NotionContentItemTypes.PAGE_URL,
      // content: '',
      completed: null,
      expanded: null,
      iconUrl,
      pageId,
    }
    const body = parentItemId ? { ...data, parentItemId: parentItemId } : data

    return { _id, body }
  }

  private static updateToTodo(
    _id: string,
    parentItemId?: string
  ): IUpdatePageContentItemParams {
    const data = {
      type: NotionContentItemTypes.TODO,
      // content: '',
      completed: false,
      expanded: null,
      iconUrl: null,
      pageId: null,
    }
    const body = parentItemId ? { ...data, parentItemId: parentItemId } : data

    return { _id, body }
  }

  private static updateToHeading(
    _id: string,
    hLevel: 1 | 2 | 3,
    parentItemId?: string
  ): IUpdatePageContentItemParams {
    let type

    switch (hLevel) {
      case 1:
        type = NotionContentItemTypes.H1
        break
      case 2:
        type = NotionContentItemTypes.H2
        break
      case 3:
        type = NotionContentItemTypes.H3
        break
    }

    const data = {
      type,
      // content: '',
      expanded: null,
      completed: null,
      iconUrl: null,
      pageId: null,
    }

    const body = parentItemId ? { ...data, parentItemId: parentItemId } : data

    return { _id, body }
  }

  private static updateToToggleHeading(
    _id: string,
    hLevel: 1 | 2 | 3,
    parentItemId?: string
  ): IUpdatePageContentItemParams {
    let type

    switch (hLevel) {
      case 1:
        type = NotionContentItemTypes.TGL_H1
        break
      case 2:
        type = NotionContentItemTypes.TGL_H3
        break
      case 3:
        type = NotionContentItemTypes.TGL_H3
        break
    }

    const data = {
      type,
      // content: '',
      expanded: false,
      completed: null,
      iconUrl: null,
      pageId: null,
    }

    const body = parentItemId ? { ...data, parentItemId: parentItemId } : data

    return { _id, body }
  }

  private static updateToQuote(
    _id: string,
    parentItemId?: string
  ): IUpdatePageContentItemParams {
    const data = {
      type: NotionContentItemTypes.QUOTE,
      // content: '',
      completed: null,
      expanded: null,
      iconUrl: null,
      pageId: null,
    }
    const body = parentItemId ? { ...data, parentItemId: parentItemId } : data

    return { _id, body }
  }

  private static updateToDivider(
    _id: string,
    parentItemId?: string
  ): IUpdatePageContentItemParams {
    const data = {
      type: NotionContentItemTypes.DIVIDER,
      // content: '',
      completed: null,
      expanded: null,
      iconUrl: null,
      pageId: null,
    }
    const body = parentItemId ? { ...data, parentItemId: parentItemId } : data

    return { _id, body }
  }

  private static updateToWebBookmark(
    _id: string,
    parentItemId?: string
  ): IUpdatePageContentItemParams {
    const data = {
      type: NotionContentItemTypes.WEB_BOOKMARK,
      content: '',
      completed: null,
      expanded: null,
      iconUrl: null,
      pageId: null,
    }
    const body = parentItemId ? { ...data, parentItemId: parentItemId } : data

    return { _id, body }
  }
}
