import React, { useState, lazy, Suspense } from 'react'

import PageViewsPanelLoader from 'components/ui/loaders/PageViewsPanel'
import TemplateViewLoader from 'components/ui/loaders/View'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Template from './NotionsListTemplate.styles'

const PageViewsPanel = lazy(() => import('components/PagePanels/Views'))
const BoardView = lazy(() => import('./Views/components/Board'))
const GalleryView = lazy(() => import('./Views/components/Gallery'))
const SoonTitle = lazy(() => import('./Views/Soon'))

const NotionsListTemplate = () => {
  const { selectedView } = useTypedSelector(state => state.app)
  // const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

  return (
    <Template.Wrapper>
      <Suspense fallback={<PageViewsPanelLoader />}>
        <PageViewsPanel />
      </Suspense>
      <Template.Content>
        <Suspense fallback={<TemplateViewLoader />}>
          {selectedView === 'Board' && <BoardView />}
          {selectedView === 'Gallery' && <GalleryView />}
          {(selectedView === 'List' || selectedView === 'Calendar') && (
            <SoonTitle />
          )}
        </Suspense>
      </Template.Content>
    </Template.Wrapper>
  )
}

export default NotionsListTemplate
