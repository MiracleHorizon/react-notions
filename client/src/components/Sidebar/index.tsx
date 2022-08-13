import React, { useRef } from 'react'
import { useDeviceData } from 'react-device-detect'
import { useHover } from 'usehooks-ts'
import { CSSTransition } from 'react-transition-group'

import SidebarPanels from './Panels'
import SidebarResizer from './Resizer'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useResizeSidebar from 'hooks/useResizeSidebar'
import * as Sidebar from './Sidebar.styles'
import { appearDuration, transitionName } from './Sidebar.styles'

const PagesSidebar = () => {
  const sidebarState = useTypedSelector(state => state.app.sidebar)
  const { device } = useDeviceData('desktop')
  const { closeSidebar } = useActions()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)
  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)
  const isResizingEnabled = useResizeSidebar({ ref, resizerRef })

  const handleCloseSidebar = () => closeSidebar()

  return (
    // <CSSTransition
    //   in={sidebarState.isOpen}
    //   timeout={appearDuration}
    //   classNames={transitionName}
    //   unmountOnExit
    //   mountOnEnter
    // >
      <Sidebar.Wrapper
        ref={ref}
        deviceType={device.type}
        isResizingEnabled={isResizingEnabled}
        isResizerHovering={isResizerHovering}
        {...sidebarState}
      >
        <Sidebar.Container data-sb-el='container'>
          <SidebarPanels isHovering={isHovering} />
          <SidebarResizer
            resizerRef={resizerRef}
            isResizingEnabled={isResizingEnabled}
            isActive={!isResizingEnabled && isResizerHovering}
            onClickAction={handleCloseSidebar}
          />
        </Sidebar.Container>
        {/*{isResizerHovering && <SidebarResizerTooltip reference={resizerRef} />}*/}
      </Sidebar.Wrapper>
    // </CSSTransition>
  )
}

export default PagesSidebar
