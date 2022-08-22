import React, { memo } from 'react'

import SwitchTaskBar from './SwitchTaskBar'
import PageSettingsPanel from 'components/Workspace - Checked/Header - Checked/PageSettingsPanel'
import IPage from 'models/page/IPage'
import * as Header from './NotionTaskHeader.styles'

const NotionTaskHeader = memo((page: IPage) => (
  <Header.Wrapper>
    <Header.Container>
      <SwitchTaskBar {...page} />
      <PageSettingsPanel {...page} />
    </Header.Container>
  </Header.Wrapper>
))

export default NotionTaskHeader
