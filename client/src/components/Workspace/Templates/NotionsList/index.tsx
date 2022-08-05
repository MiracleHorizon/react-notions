import React, { useState } from 'react'
import Loadable from 'react-loadable'

import PageViewsPanelLoader from 'components/ui/loaders/PageViewsPanelLoader'
import TemplateViewLoader from 'components/ui/loaders/ViewLoader'
import useTypedSelector from 'hooks/useTypedSelector'
import Wrapper from './NotionsListTemplate.styles'

const PageViewsPanel = Loadable({
  loader: () => import('components/ViewsPanel'),
  loading: () => <PageViewsPanelLoader />,
})

const BoardView = Loadable({
  loader: () => import('./Views/components/Board'),
  loading: () => <TemplateViewLoader />,
})

const GalleryView = Loadable({
  loader: () => import('./Views/components/Gallery'),
  loading: () => <TemplateViewLoader />,
})

const SoonTitle = Loadable({
  loader: () => import('./Views/Soon'),
  loading: () => <TemplateViewLoader />,
})

const NotionsListTemplate = () => {
  const { selectedView } = useTypedSelector(state => state.app)
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

  return (
    <>
      <PageViewsPanel />
      <Wrapper>
        {selectedView === 'Board' && <BoardView />}
        {selectedView === 'Gallery' && <GalleryView />}
        {(selectedView === 'List' || selectedView === 'Calendar') && (
          <SoonTitle />
        )}
      </Wrapper>
    </>
  )
}

export default NotionsListTemplate
