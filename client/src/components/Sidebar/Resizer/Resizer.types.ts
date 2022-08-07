import { RefObject, MouseEvent } from 'react'

export default interface ResizerProps {
  resizerRef: RefObject<HTMLDivElement>
  isActive: boolean
  isResizingEnabled: boolean
  onClickAction: (e: MouseEvent) => void
}
