import { NotionContentItemTypes } from './NotionContentItemTypes'
import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'

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

interface CreatePageUrlParams extends CreateParams {
  iconUrl: string | null
  pageId: string
}

export default class NotionContentItem {
  private static create = ({
    parentPageId,
    parentItemId,
    type,
    expanded,
    completed,
    pageId,
    iconUrl,
    order,
  }: CreateDefaultParams): ICreatePageContentItemBody => {
    const item = {
      parentPageId,
      parentItemId: parentItemId ? parentItemId : null,
      type,
      content: '',
      color: NotionContentItemColorsEnum.DEFAULT,
      bgColor: NotionContentItemColorsEnum.DEFAULT,
      expanded: expanded !== undefined ? expanded : null,
      completed: completed !== undefined ? completed : null,
      pageId: pageId ? pageId : null,
      iconUrl: iconUrl ? iconUrl : null,
    } as ICreatePageContentItemBody

    if (order !== undefined) item.order = order

    return item
  }

  static createText = ({ parentPageId, parentItemId, order }: CreateParams) =>
    this.create({
      parentPageId,
      parentItemId,
      type: NotionContentItemTypes.TEXT,
      order,
    })

  static createTodo = ({ parentPageId, parentItemId, order }: CreateParams) =>
    this.create({
      parentPageId,
      parentItemId,
      type: NotionContentItemTypes.TODO,
      order,
      completed: false,
    })

  static createHeading = ({
    parentPageId,
    parentItemId,
    level,
    order,
  }: CreateParams & { level: 2 | 3 | undefined }) => {
    let type = NotionContentItemTypes.H1

    switch (level) {
      case 2:
        type = NotionContentItemTypes.H2
        break
      case 3:
        type = NotionContentItemTypes.H3
        break
    }

    return this.create({
      parentPageId,
      parentItemId,
      type,
      order,
    })
  }

  static createPageUrl = ({
    parentPageId,
    parentItemId,
    pageId,
    iconUrl,
    order,
  }: CreatePageUrlParams) =>
    this.create({
      parentPageId,
      parentItemId,
      type: NotionContentItemTypes.PAGE_URL,
      order,
      pageId,
      iconUrl,
    })

  static createQuote = ({ parentPageId, parentItemId, order }: CreateParams) =>
    this.create({
      parentPageId,
      parentItemId,
      type: NotionContentItemTypes.QUOTE,
      order,
    })

  static createDivider = ({
    parentPageId,
    parentItemId,
    order,
  }: CreateParams) =>
    this.create({
      parentPageId,
      parentItemId,
      type: NotionContentItemTypes.DIVIDER,
      order,
    })

  static createWebBookmark = ({
    parentPageId,
    parentItemId,
    order,
  }: CreateParams) =>
    this.create({
      parentPageId,
      parentItemId,
      type: NotionContentItemTypes.WEB_BOOKMARK,
      order,
    })
}
