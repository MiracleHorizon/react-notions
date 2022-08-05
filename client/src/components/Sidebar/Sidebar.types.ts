import { TDevice } from 'types'
import { SidebarLocation } from 'store/slices/app/app.types'

export interface SidebarWrapperProps {
  width: number
  isOpen: boolean
  isResizerHovering: boolean
  isResizingEnabled: boolean
  location: SidebarLocation
  deviceType: TDevice
}
