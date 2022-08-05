import React, { memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import HeaderPageTitle from './PageTitle'
import PageSettingsPanel from './PageSettingsPanel'
import { OpenLeftSidebarButton } from 'components/ui/buttons/ToggleSidebar'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Header from './Header.styles'

const LayoutHeader = memo(() => {
  const { isOpen } = useTypedSelector(state => state.app.leftSidebar)
  const page = useTypedSelector(state => state.pages.page)

  const ref = useRef<HTMLHeadElement>(null)
  const isHovering = useHover(ref)

  return (
    <Header.Wrapper ref={ref}>
      {!isOpen && <OpenLeftSidebarButton isHeaderHovering={isHovering} />}
      <Header.Container>
        <Header.Panel isOpen={isOpen}>
          {page && (
            <>
              <HeaderPageTitle {...page} />
              <PageSettingsPanel {...page} />
            </>
          )}
        </Header.Panel>
      </Header.Container>
    </Header.Wrapper>
  )
})

export default LayoutHeader
