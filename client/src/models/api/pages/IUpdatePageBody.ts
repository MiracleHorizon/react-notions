import { TPageFont } from 'models/decor/fonts'
import INotionContentItem from 'models/pageContent/INotionContentItem'

export default interface IUpdatePageBody {
  parentPageId?: string | null
  parentListId?: string | null
  title?: string
  fullWidth?: boolean
  smallText?: boolean
  favorite?: boolean
  expanded?: boolean
  locked?: boolean
  sbOrder?: number | null
  taskOrder?: number | null
  descriptionExpanded?: boolean
  description?: string
  status?: string | null
  font?: TPageFont
  iconUrl?: string | null
  coverUrl?: string | null
  coverPosition?: number
  content?: INotionContentItem[]
}
