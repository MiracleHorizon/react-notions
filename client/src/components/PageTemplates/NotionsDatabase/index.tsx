import React, { lazy, Suspense } from 'react'

import TemplateViewLoader from 'components/ui/loaders/View'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Template from './NotionsDatabaseTemplate.styles'

const BoardView = lazy(() => import('./Views/components/Board'))
const GalleryView = lazy(() => import('./Views/components/Gallery'))
const SoonTitle = lazy(() => import('./Views/Soon'))

const NotionsDatabaseTemplate = () => {
  const { selectedView } = useTypedSelector(s => s.app)

  const handleView = () => {
    switch (selectedView) {
      case 'Board':
        return <BoardView />
      case 'Gallery':
        return <GalleryView />
      default:
        return <SoonTitle />
    }
  }

  return (
    <Template.Wrapper>
      <Template.Container>
        <Template.Content>
          <Suspense fallback={<TemplateViewLoader />}>
            {handleView()}
          </Suspense>
        </Template.Content>
      </Template.Container>
    </Template.Wrapper>
  )
}

export default NotionsDatabaseTemplate
