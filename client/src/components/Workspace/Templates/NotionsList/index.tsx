import React, { useState, Suspense, lazy } from 'react'

import PageViewsPanelLoader from 'components/ui/loaders/PageViewsPanel'
import TemplateViewLoader from 'components/ui/loaders/View'
import useTypedSelector from 'hooks/useTypedSelector'
import Wrapper from './NotionsListTemplate.styles'

const PageViewsPanel = lazy(() => import('components/ViewsPanel'))
const BoardView = lazy(() => import('./Views/components/Board'))
const GalleryView = lazy(() => import('./Views/components/Gallery'))
const SoonTitle = lazy(() => import('./Views/Soon'))

const NotionsListTemplate = () => {
  const { selectedView } = useTypedSelector(state => state.app)
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

  return (
    <>
      <Suspense fallback={<PageViewsPanelLoader />}>
        <PageViewsPanel />
      </Suspense>
      <Wrapper>
        <Suspense fallback={<TemplateViewLoader />}>
          {selectedView === 'Board' && <BoardView />}
          {selectedView === 'Gallery' && <GalleryView />}
          {(selectedView === 'List' || selectedView === 'Calendar') && (
            <SoonTitle />
          )}
        </Suspense>
      </Wrapper>
    </>
  )
}

export default NotionsListTemplate
