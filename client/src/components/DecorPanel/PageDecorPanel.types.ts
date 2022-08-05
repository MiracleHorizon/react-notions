import { TPageTemplate } from 'models/page/IPage'
import { IComment } from 'models/IComment'

export default interface DecorPanelProps {
  _id: string
  title: string
  coverUrl: string | null
  iconUrl: string | null
  comments: IComment[]
  template: TPageTemplate
  fullWidth: boolean
  description: string
  descriptionExpanded: boolean
}

export interface PanelContainerProps {
  fullWidth: boolean
  template: TPageTemplate
}
