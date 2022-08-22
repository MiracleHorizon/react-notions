import React, { lazy, Suspense } from 'react'

import TemplateViewLoader from 'components/ui/loaders/View'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Template from './NotionsListTemplate.styles'

const BoardView = lazy(() => import('./Views/components/Board - Checked'))
const GalleryView = lazy(() => import('./Views/components/Gallery - Checked'))
const SoonTitle = lazy(() => import('./Views/Soon - Checked'))

const NotionsListTemplate = () => {
  const { selectedView } = useTypedSelector(s => s.app)

  return (
    <Template.Wrapper>
      <Template.Container>
        <Template.Content>
          <Suspense fallback={<TemplateViewLoader />}>
            {selectedView === 'Board' && <BoardView />}
            {selectedView === 'Gallery' && <GalleryView />}
            {(selectedView === 'List' || selectedView === 'Calendar') && (
              <SoonTitle />
            )}
          </Suspense>
        </Template.Content>
      </Template.Container>
    </Template.Wrapper>
  )
}

export default NotionsListTemplate
