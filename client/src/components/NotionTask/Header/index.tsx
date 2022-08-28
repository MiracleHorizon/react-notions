import React, { memo } from 'react'

import SwitchTaskBar from './SwitchTaskBar'
import PageSettingsPanel from 'components/Workspace/Header/PageSettingsPanel'
import OverLimitFileSizeAlert from 'components/ui/alerts/OverLimitFileSize'
import IPage from 'models/page/IPage'
import * as Header from './NotionTaskHeader.styles'

const NotionTaskHeader = memo((page: IPage) => (
  <Header.Wrapper>
    <Header.Container>
      <SwitchTaskBar {...page} />
      <PageSettingsPanel {...page} />
    </Header.Container>
    <OverLimitFileSizeAlert/>
  </Header.Wrapper>
))

export default NotionTaskHeader
