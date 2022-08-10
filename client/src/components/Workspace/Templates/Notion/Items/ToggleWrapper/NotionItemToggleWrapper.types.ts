import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'
import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'

export default interface NotionItemToggleWrapperProps {
  _id: string
  expanded: boolean | null
  type: NotionContentItemTypes
  bgColor: NotionContentItemColorsEnum
  childrenTitle: JSX.Element
  children: JSX.Element
  contentLength: number
}
