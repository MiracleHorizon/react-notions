import React, { useRef, useState } from 'react'
import { useDeviceData } from 'react-device-detect'
import { useHover } from 'usehooks-ts'

import LeftSidebarPanels from './Panels'
import SidebarResizer from '../Resizer'
import { SidebarResizerTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Sidebar from '../Sidebar.styles'

const LeftSidebar = () => {
  const [isResizingEnabled, setResizingEnabled] = useState<boolean>(false)
  const sidebarState = useTypedSelector(state => state.app.leftSidebar)
  const { closeLeftSidebar } = useActions()
  const { device } = useDeviceData('')

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)

  const handleCloseSidebar = () => closeLeftSidebar()

  return (
    <Sidebar.Wrapper
      ref={ref}
      deviceType={device.type}
      isResizingEnabled={isResizingEnabled}
      isResizerHovering={isResizerHovering}
      {...sidebarState}
    >
      <Sidebar.Container data-sb-el='container'>
        <LeftSidebarPanels isHovering={isHovering} />
        <SidebarResizer
          location='left'
          resizerRef={resizerRef}
          onClickAction={handleCloseSidebar}
          isResizingEnabled={isResizingEnabled}
          isActive={!isResizingEnabled && isResizerHovering}
        />
      </Sidebar.Container>
      {/*{isResizerHovering && <SidebarResizerTooltip reference={resizerRef} />}*/}
    </Sidebar.Wrapper>
  )
}

export default LeftSidebar
