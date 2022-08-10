import { ElementCoords } from 'types'

export interface FilledTooltipContainerProps {
  coords: ElementCoords
  transX?: boolean
  transY?: boolean
  itemsCenter?: boolean
}

export default interface FilledTooltipProps
  extends FilledTooltipContainerProps {
  title?: string
  desc?: string
}
