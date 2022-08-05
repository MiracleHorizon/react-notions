import React, { useRef, useState } from 'react'
import { useDeviceData } from 'react-device-detect'
import { useHover } from 'usehooks-ts'
import Loadable from 'react-loadable'

import SidebarResizer from '../Resizer'
import RightSidebarHeader from './Header'
import RightSidebarContentLoader from 'components/ui/loaders/RightSidebarContentLoader'
import { CloseRightSidebarButton } from 'components/ui/buttons/ToggleSidebar'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Sidebar from '../Sidebar.styles'

const EmptyRightSidebar = Loadable({
  loader: () => import('./Empty'),
  loading: () => <RightSidebarContentLoader />,
})

// const RightSidebarContent = Loadable({})

const RightSidebar = () => {
  const [isResizingEnabled, setResizingEnabled] = useState<boolean>(false)
  const sidebarState = useTypedSelector(state => state.app.rightSidebar)
  const page = useTypedSelector(state => state.pages.page)
  const { device } = useDeviceData('')
  const { closeRightSidebar } = useActions()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const resizerRef = useRef<HTMLDivElement>(null)
  const isResizerHovering = useHover(resizerRef)

  const handleCloseSidebar = () => closeRightSidebar()

  if (!page) return null

  return (
    <Sidebar.Wrapper
      ref={ref}
      deviceType={device.type}
      isResizingEnabled={isResizingEnabled}
      isResizerHovering={isResizerHovering}
      {...sidebarState}
    >
      <Sidebar.Container data-el='sb-container'>
        <CloseRightSidebarButton isSidebarHovering={isHovering} />
        <RightSidebarHeader />
        {page.comments.length > 0 ? <>Комменты есть</> : <EmptyRightSidebar />}
      </Sidebar.Container>
      <SidebarResizer
        location='right'
        resizerRef={resizerRef}
        onClickAction={handleCloseSidebar}
        isResizingEnabled={isResizingEnabled}
        isActive={!isResizingEnabled && isResizerHovering}
      />
    </Sidebar.Wrapper>
  )
}

export default RightSidebar
