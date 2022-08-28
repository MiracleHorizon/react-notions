import { ElementCoords } from 'types'
import { RefObject } from 'react'

export interface FilledTooltipContainerProps {
  coords?: ElementCoords
  itemsCenter?: boolean
}

export default interface FilledTooltipProps
  extends FilledTooltipContainerProps,
    NodeRef<HTMLDivElement> {
  title?: string
  desc?: string
  pos: 'centerBottom' | 'centerTop' | 'rightCenter' | 'leftCenter' | 'rightTop'
}

export interface NodeRef<T extends HTMLElement> {
  invokerRef: RefObject<HTMLDivElement>
}
