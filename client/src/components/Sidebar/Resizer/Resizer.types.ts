import { RefObject, MouseEvent } from 'react'
import { SidebarLocation } from 'store/slices/app/app.types'

export default interface ResizerProps {
  location: SidebarLocation
  resizerRef: RefObject<HTMLDivElement>
  isActive: boolean
  isResizingEnabled: boolean
  onClickAction: (e: MouseEvent) => void
}
