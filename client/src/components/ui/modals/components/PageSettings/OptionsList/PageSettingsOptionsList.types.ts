import { ElementCoords } from 'types'
import { TPageTemplate } from 'models/page/IPage'

export default interface PageSettingsOptionsListProps {
  _id: string
  template: TPageTemplate
  favorite: boolean
  locked: boolean
  coords: ElementCoords
}
