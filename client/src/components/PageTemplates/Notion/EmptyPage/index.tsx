import React, { FC, memo } from 'react'

import TaskStatusPanel from 'components/PagePanels - Checked/Status - Checked'
import EmptyPageContent from './Content - Checked'
import IPage from 'models/page/IPage'
import * as Page from './EmptyPage.styles'

const EmptyPage: FC<IPage> = memo(page => (
  <Page.Wrapper>
    <Page.Container fullWidth={page.fullWidth} isTask={page.status !== null}>
      {page.status !== null && <TaskStatusPanel {...page} />}
      <EmptyPageContent {...page} />
    </Page.Container>
  </Page.Wrapper>
))

export default EmptyPage
