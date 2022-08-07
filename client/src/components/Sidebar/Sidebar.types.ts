import { TDevice } from 'types'

export interface SidebarWrapperProps {
  width: number
  isOpen: boolean
  isResizerHovering: boolean
  isResizingEnabled: boolean
  deviceType: TDevice
}
