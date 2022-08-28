import React, { FC, memo, useRef, lazy, Suspense } from 'react'
import { useHover } from 'usehooks-ts'

import PageTitle from './Title'
import DecorOptions from './Options'
import PageCoverLoader from 'components/ui/loaders/Cover'
import PageIconLoader from 'components/ui/loaders/Icon'
import PageDescriptionLoader from 'components/ui/loaders/Description'
import OverLimitFileSizeAlert from 'components/ui/alerts/OverLimitFileSize'
import IPage from 'models/page/IPage'
import * as Panel from './PageDecorPanel.styles'

const PageCover = lazy(() => import('./Cover'))
const PageIcon = lazy(() => import('./Icon'))
const PageDescription = lazy(() => import('./Description'))

const PageDecorPanel: FC<IPage> = memo(page => {
  const {
    _id,
    template,
    fullWidth,
    iconUrl,
    coverUrl,
    coverPosition,
    locked,
    description,
    descriptionExpanded,
  } = page
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  return (
    <Panel.Wrapper ref={ref}>
      {coverUrl && (
        <Suspense fallback={<PageCoverLoader />}>
          <PageCover
            _id={_id}
            template={template}
            coverUrl={coverUrl}
            coverPosition={coverPosition}
            fullWidth={fullWidth}
            locked={locked}
          />
        </Suspense>
      )}
      <Panel.Container
        data-el='decor-panel'
        template={template}
        fullWidth={fullWidth}
      >
        {template === 'Notion' && iconUrl && (
          <Suspense fallback={<PageIconLoader />}>
            <PageIcon
              _id={_id}
              template={template}
              iconUrl={iconUrl}
              coverUrl={coverUrl}
              locked={locked}
            />
          </Suspense>
        )}
        <DecorOptions isHovering={isHovering} {...page} />
        <PageTitle {...page} />
        {template !== 'Notion' && descriptionExpanded && (
          <Suspense fallback={<PageDescriptionLoader />}>
            <PageDescription _id={_id} description={description} />
          </Suspense>
        )}
      </Panel.Container>
    </Panel.Wrapper>
  )
})

export default PageDecorPanel
