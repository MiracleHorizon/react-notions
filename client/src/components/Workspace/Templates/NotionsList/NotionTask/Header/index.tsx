import React from 'react'

import SwitchTaskBar from './SwitchTaskBar'
import PageSettingsPanel from 'components/Header/PageSettingsPanel'
import IPage from 'models/page/IPage'
import * as Header from './NotionTaskHeader.styles'

const NotionTaskHeader = (page: IPage) => (
  <Header.Wrapper>
    <Header.Container>
      <SwitchTaskBar
        _id={page._id}
        parentPageId={page.parentPageId!}
        parentListId={page.parentListId!}
      />
      <PageSettingsPanel {...page} />
    </Header.Container>
  </Header.Wrapper>
)

export default NotionTaskHeader
