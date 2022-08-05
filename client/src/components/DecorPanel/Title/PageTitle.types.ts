import { TPageTemplate } from 'models/page/IPage'

export default interface PageTitleProps {
  _id: string
  template: TPageTemplate
  title: string
  iconUrl: string | null
  coverUrl: string | null
}

export interface TitleContainerProps {
  template: TPageTemplate
  iconUrl: string | null
}
