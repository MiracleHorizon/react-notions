import React, { FC, memo } from 'react'

import TaskStatusPanel from 'components/PagePanels/Status'
import EmptyPageContent from './Content'
import IPage from 'models/page/IPage'
import * as Page from './EmptyPage.styles'

const EmptyPage: FC<IPage> = memo(page => (
  <Page.Wrapper>
    <Page.Container fullWidth={page.fullWidth} isTask={Boolean(page.status)}>
      {page.status && <TaskStatusPanel {...page} />}
      <EmptyPageContent {...page} />
    </Page.Container>
  </Page.Wrapper>
))

export default EmptyPage
