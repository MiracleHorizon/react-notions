import React from 'react'
import { useSearchParams } from 'react-router-dom'

import HeaderPageTitle from './PageTitle'
import PageSettingsPanel from './PageSettingsPanel'
import OpenSidebarBar from './OpenSidebarBar'
import OverLimitFileSizeAlert from 'components/ui/alerts/OverLimitFileSize'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Header from './Header.styles'

const WorkspaceHeader = () => {
  const {
    notions: { page },
    app: { sidebar: { isOpen: isSidebarOpen } },
  } = useTypedSelector(s => s)
  const [searchParams] = useSearchParams()

  return (
    <Header.Wrapper>
      <Header.Container>
        {!isSidebarOpen && <OpenSidebarBar />}
        <Header.Panel isSidebarOpen={isSidebarOpen}>
          <HeaderPageTitle {...page} />
          <PageSettingsPanel {...page} />
        </Header.Panel>
      </Header.Container>
      {!searchParams.get('p') && <OverLimitFileSizeAlert />}
    </Header.Wrapper>
  )
}

export default WorkspaceHeader
