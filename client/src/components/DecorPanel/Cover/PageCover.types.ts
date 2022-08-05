import { TPageTemplate } from 'models/page/IPage'

export default interface PageCoverProps {
  _id: string
  coverUrl: string
  template: TPageTemplate
  coverPosition: number
}

export interface CoverWrapperProps {
  template: TPageTemplate
  isRepositionEnabled: boolean
}
