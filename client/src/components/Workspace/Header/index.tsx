import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import HeaderPageTitle from './PageTitle'
import PageSettingsPanel from './PageSettingsPanel'
import OpenSidebarButton from 'components/ui/buttons/ToggleSidebar/Open'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Header from './Header.styles'

const WorkspaceHeader = () => {
  const { isOpen: isSidebarOpen } = useTypedSelector(s => s.app.sidebar)
  const { page } = useTypedSelector(s => s.pages)

  const ref = useRef<HTMLHeadElement>(null)
  const isHovering = useHover(ref)

  return (
    <Header.Wrapper ref={ref}>
      {!isSidebarOpen && <OpenSidebarButton isHeaderHovering={isHovering} />}
      <Header.Container>
        <Header.Panel>
          <HeaderPageTitle {...page} />
          <PageSettingsPanel {...page} />
        </Header.Panel>
      </Header.Container>
    </Header.Wrapper>
  )
}

export default WorkspaceHeader
