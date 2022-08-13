import { TPageTemplate } from 'models/page/IPage'

export default interface PageIconProps {
  _id: string
  template: TPageTemplate
  iconUrl: string
  coverUrl: string | null
}

export interface IconContainerProps {
  template: TPageTemplate
  coverUrl: string | null
}
