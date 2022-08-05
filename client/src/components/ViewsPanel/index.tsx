import React from 'react'

import ViewButton from 'components/ui/buttons/View'
import {
  BoardTemplateSvg,
  CalendarTemplateSvg,
  GalleryTemplateSvg,
  ListTemplateSvg,
} from 'components/ui/svg'
import * as Panel from './PageViewsPanel.styles'

export const views = [
  {
    title: 'Board',
    StartSvg: BoardTemplateSvg,
  },
  {
    title: 'Gallery',
    StartSvg: GalleryTemplateSvg,
  },
  {
    title: 'List',
    StartSvg: ListTemplateSvg,
  },
  {
    title: 'Calendar',
    StartSvg: CalendarTemplateSvg,
  },
]

const PageViewsPanel = () => (
  <Panel.Wrapper>
    <Panel.Container>
      <Panel.ViewsList>
        {views.map(view => (
          <ViewButton key={view.title} {...view} />
        ))}
      </Panel.ViewsList>
    </Panel.Container>
  </Panel.Wrapper>
)

export default PageViewsPanel
