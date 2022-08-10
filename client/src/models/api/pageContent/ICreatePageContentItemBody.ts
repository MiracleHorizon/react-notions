import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'
import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'

export default interface ICreatePageContentItemBody {
  parentPageId: string
  parentItemId: string | null
  type: NotionContentItemTypes
  content: string
  color: NotionContentItemColorsEnum
  bgColor: NotionContentItemColorsEnum
  expanded: boolean | null
  completed: boolean | null
  iconUrl: string | null
  pageId: string | null
  order?: number
}
