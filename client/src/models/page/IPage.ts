import { TPageFont } from 'models/decor/fonts'
import { IComment } from 'models/IComment'

export interface IPage {
  readonly _id: string
  parentPageId: string | null
  parentListId: string | null
  status: string | null
  template: TPageTemplate
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
  comments: IComment[]
  content: string[]
  dependencies: IPage[]
  descriptionExpanded: boolean
  description: string
  sbOrder: number | null
  taskOrder: number | null
  updatedAt: string
  readonly createdAt: string
  readonly author: string
}

export type TPageTemplate = 'Notion' | 'NotionsList'
