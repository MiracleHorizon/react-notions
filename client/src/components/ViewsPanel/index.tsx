import React from 'react'

import ViewButton from 'components/ui/buttons/View'
import { NOTIONS_LIST_VIEWS } from 'utils/constants/app'
import * as Panel from './PageViewsPanel.styles'

const PageViewsPanel = () => (
  <Panel.Wrapper>
    <Panel.Container>
      <Panel.ViewsList>
        {NOTIONS_LIST_VIEWS.map(view => (
          <ViewButton key={view.title} {...view} />
        ))}
      </Panel.ViewsList>
    </Panel.Container>
  </Panel.Wrapper>
)

export default PageViewsPanel
