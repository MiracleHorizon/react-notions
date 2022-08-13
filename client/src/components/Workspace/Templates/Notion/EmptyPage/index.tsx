import React, { FC } from 'react'

import TaskStatusPanel from 'components/PagePanels/Status'
import EmptyPageContent from './Content'
import IPage from 'models/page/IPage'
import * as Page from './EmptyPage.styles'

const EmptyPage: FC<IPage> = page => (
  <Page.Wrapper>
    <Page.Container fullWidth={page.fullWidth} isTask={page.status !== null}>
      {page.status !== null && <TaskStatusPanel {...page} />}
      <EmptyPageContent {...page} />
    </Page.Container>
  </Page.Wrapper>
)

export default EmptyPage
