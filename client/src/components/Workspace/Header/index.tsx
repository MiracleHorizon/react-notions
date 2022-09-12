import React from 'react'
import { useSearchParams } from 'react-router-dom'

import HeaderContent from './Content'
import OpenSidebarBar from './OpenSidebarBar'
import OverLimitFileSizeAlert from 'components/ui/alerts/OverLimitFileSize'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Header from './Header.styles'

const WorkspaceHeader = () => {
  const { isOpen: isSidebarOpen } = useTypedSelector(s => s.app.sidebar)
  const [searchParams] = useSearchParams()

  return (
    <Header.Wrapper>
      <Header.Container>
        {!isSidebarOpen && <OpenSidebarBar />}
        <HeaderContent isSidebarOpen={isSidebarOpen} />
      </Header.Container>
      {!searchParams.get('p') && <OverLimitFileSizeAlert />}
    </Header.Wrapper>
  )
}

export default WorkspaceHeader
