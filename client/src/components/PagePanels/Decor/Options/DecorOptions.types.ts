import { TPageTemplate } from 'models/page/IPage'

export default interface DecorOptionsProps {
  isHovering: boolean
  _id: string
  template: TPageTemplate
  locked: boolean
  iconUrl: string | null
  coverUrl: string | null
  description: string
  descriptionExpanded: boolean
}

export interface DecorOptionsWrapperProps {
  coverUrl: string | null
  template: TPageTemplate
}
