import { ElementCoords } from 'types'
import { RefObject } from 'react'
import { ModalPosition } from 'hooks/useSetModalPosition'

export interface FilledTooltipContainerProps {
  fixed?: boolean
  coords?: ElementCoords
  itemsCenter?: boolean
}

export default interface FilledTooltipProps
  extends FilledTooltipContainerProps,
    NodeRef<HTMLDivElement> {
  title?: string
  desc?: string
  pos: ModalPosition
}

export interface NodeRef<T extends HTMLElement> {
  invokerRef: RefObject<HTMLDivElement>
}
