import { ElementCoords } from 'types'

export default interface PageSettingsOptionsListProps {
  _id: string
  favorite: boolean
  locked: boolean
  coords: ElementCoords
}
