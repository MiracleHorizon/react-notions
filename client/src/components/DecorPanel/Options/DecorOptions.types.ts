import { TPageTemplate } from 'models/page/IPage'

export default interface DecorOptionsProps {
  _id: string
  isHovering: boolean
  template: TPageTemplate
  iconUrl: string | null
  coverUrl: string | null
  description: string
  descriptionExpanded: boolean
}

export interface OptionsWrapperProps {
  coverUrl: string | null
  template: TPageTemplate
}
