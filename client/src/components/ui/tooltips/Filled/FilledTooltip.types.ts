import { ElementCoords } from 'types'

export default interface FilledTooltipProps {
  title?: string
  desc?: string
  coords: ElementCoords
  trans?: boolean
  transY?: boolean
}
