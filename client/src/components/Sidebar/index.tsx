import React, { useCallback, useRef } from 'react'
import { useDeviceData } from 'react-device-detect'
import { useHover } from 'usehooks-ts'

import SidebarPanels from './Panels - Checked'
import SidebarResizer from './Resizer - Checked'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useResizeSidebar from 'hooks/useResizeSidebar'
import * as Sidebar from './Sidebar.styles'

const PagesSidebar = () => {
  const { closeSidebar } = useActions()
  const { device } = useDeviceData('desktop')
  const sidebarState = useTypedSelector(s => s.app.sidebar)

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)
  const isResizingEnabled = useResizeSidebar({ ref, resizerRef })

  const handleCloseSidebar = useCallback(() => {
    if (!(!isResizingEnabled && isResizerHovering)) closeSidebar()
  }, [isResizingEnabled, isResizerHovering, closeSidebar])

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
      {/*{isResizerHovering && <SidebarResizerTooltip reference={resizerRef} />}*/}
    </Sidebar.Wrapper>
  )
}

export default PagesSidebar
