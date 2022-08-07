import { ElementCoords } from 'types'

export interface FilledTooltipContainerProps {
  coords: ElementCoords
  transX?: boolean
  transY?: boolean
}

export default interface FilledTooltipProps
  extends FilledTooltipContainerProps {
  title?: string
  desc?: string
}
