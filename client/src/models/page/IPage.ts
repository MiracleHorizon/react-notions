import INotionContentItem from 'models/pageContent/INotionContentItem'
import { TPageFont } from 'models/decor/fonts'

export default interface IPage {
  readonly _id: string
  parentPageId: string | null
  parentListId: string | null
  template: TPageTemplate
  status: string | null
  title: string
  fullWidth: boolean
  smallText: boolean
  favorite: boolean
  expanded: boolean
  locked: boolean
  font: TPageFont
  iconUrl: string | null
  coverUrl: string | null
  coverPosition: number
  dependencies: IPage[]
  content: INotionContentItem[]
  descriptionExpanded: boolean
  description: string
  sbOrder: number | null
  taskOrder: number | null
  updatedAt: string
  readonly createdAt: string
  readonly author: string
}

export type TPageTemplate = 'Notion' | 'NotionsDatabase'
