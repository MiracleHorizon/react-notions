import { RefObject, MouseEvent } from 'react'

export default interface ResizerProps {
  resizerRef: RefObject<HTMLDivElement>
  isResizingEnabled: boolean
  onClickAction: (e: MouseEvent) => void
}
