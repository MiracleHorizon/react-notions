import { TPageTemplate } from 'models/page/IPage'

export default interface PageIconProps {
  _id: string
  template: TPageTemplate
  iconUrl: string
  coverUrl: string | null
  locked: boolean
}

export interface IconContainerProps {
  template: TPageTemplate
  coverUrl: string | null
  locked: boolean
}
