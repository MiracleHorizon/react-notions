import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'

export default interface IUpdatePageContentItemBody {
  parentPageId?: string
  parentItemId?: string | null
  type?: NotionContentItemTypes
  content?: string
  order?: number
  color?: NotionContentItemColorsEnum
  bgColor?: NotionContentItemColorsEnum
  expanded?: boolean | null
  completed?: boolean | null
  iconUrl?: string | null
  pageId?: string | null
}
