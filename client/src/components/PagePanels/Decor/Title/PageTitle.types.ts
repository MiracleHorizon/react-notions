import { TPageTemplate } from 'models/page/IPage'
import { TPageFont } from 'models/decor/fonts'

export interface TitleContainerProps {
  template: TPageTemplate
  iconUrl: string | null
  font: TPageFont
}
