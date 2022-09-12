import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'

export type THeadingLevel = 1 | 2 | 3

interface DefaultParams {
  author: string
  order: number
  parentPageId: string
  parentItemId?: string
}

interface CreateDefaultParams extends DefaultParams {
  type: NotionContentItemTypes
  completed?: boolean
  expanded?: boolean
  pageId?: string
  iconUrl?: string | null
}

const toggleTypes = [
  NotionContentItemTypes.TGL_H1,
  NotionContentItemTypes.TGL_H2,
  NotionContentItemTypes.TGL_H3,
  NotionContentItemTypes.TGL_LIST,
]

export default class NotionContentItem {
  public static createHeading(
    params: {
      hLevel: THeadingLevel
    } & DefaultParams
  ): ICreatePageContentItemBody {
    const { hLevel, ...createParams } = params
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

    return this.createItem({ type, ...createParams })
  }

  public static createToggleHeading(
    params: {
      hLevel: THeadingLevel
    } & DefaultParams
  ): ICreatePageContentItemBody {
    const { hLevel, ...createParams } = params
    let type

    switch (hLevel) {
      case 1:
        type = NotionContentItemTypes.TGL_H1
        break
      case 2:
        type = NotionContentItemTypes.TGL_H2
        break
      case 3:
        type = NotionContentItemTypes.TGL_H3
        break
    }

    return this.createItem({ type, ...createParams })
  }

  public static createItem = ({
    parentPageId,
    parentItemId,
    type,
    order,
    pageId,
    iconUrl,
    author,
  }: CreateDefaultParams) => {
    const item = {
      parentPageId,
      type,
      content: '',
      color: NotionContentItemColorsEnum.DEFAULT,
      bgColor: NotionContentItemColorsEnum.DEFAULT,
      expanded: null,
      completed: null,
      author,
      pageId: pageId ? pageId : null,
      iconUrl: iconUrl ? iconUrl : null,
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
}
