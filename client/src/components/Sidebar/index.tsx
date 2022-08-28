import React, { useRef, useState } from 'react'
import { useDeviceData } from 'react-device-detect'
import { useEventListener, useHover } from 'usehooks-ts'

import SidebarPanels from './Panels'
import SidebarResizer from './Resizer'
import { SidebarResizerTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useResizeSidebar from 'hooks/useResizeSidebar'
import { ElementCoords } from 'types'
import * as Sidebar from './Sidebar.styles'

const PagesSidebar = () => {
  const { closeSidebar } = useActions()
  const { device } = useDeviceData('desktop')
  const sidebarState = useTypedSelector(s => s.app.sidebar)

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const resizerRef = useRef<HTMLDivElement>(null)
  const [pointerCoords, setPointerCoords] = useState<ElementCoords>({})
  const [isResizerHovering, setResizerHovering] = useState<boolean>(false)
  const isResizingEnabled = useResizeSidebar({ ref, resizerRef })

  const handleCloseSidebar = (e: React.MouseEvent) => {
    if (e.ctrlKey) closeSidebar()
  }

  const handleMouseEnter = (e: MouseEvent) => {
    setResizerHovering(true)
    setPointerCoords({ top: e.clientY })
  }

  const handleMouseLeave = () => setResizerHovering(false)

  useEventListener('mouseenter', handleMouseEnter, resizerRef)
  useEventListener('mouseleave', handleMouseLeave, resizerRef)

  return (
    <Sidebar.Wrapper
      ref={ref}
      deviceType={device.type}
      isResizingEnabled={isResizingEnabled}
      isResizerHovering={isResizerHovering}
      {...sidebarState}
    >
      <Sidebar.Container data-el='sb-container'>
        <SidebarPanels isHovering={isHovering} />
        <SidebarResizer
          resizerRef={resizerRef}
          isResizingEnabled={isResizingEnabled}
          onClickAction={handleCloseSidebar}
        />
      </Sidebar.Container>
      {isResizerHovering && !isResizingEnabled && (
        <SidebarResizerTooltip reference={ref} pointerCoords={pointerCoords} />
      )}
    </Sidebar.Wrapper>
  )
}

export default PagesSidebar
