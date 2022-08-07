import React, { FC, useRef, Suspense, lazy } from 'react'
import { useHover } from 'usehooks-ts'

import PageTitle from './Title'
import DecorOptions from './Options'
import PageCoverLoader from 'components/ui/loaders/CoverLoader'
import PageIconLoader from 'components/ui/loaders/IconLoader'
import PageDescriptionLoader from 'components/ui/loaders/DescriptionLoader'
import IPage from 'models/page/IPage'
import * as Panel from './PageDecorPanel.styles'

const PageCover = lazy(() => import('./Cover'))
const PageIcon = lazy(() => import('./Icon'))
const PageDescription = lazy(() => import('./Description'))

const PageDecorPanel: FC<IPage> = page => {
  const {
    _id,
    coverUrl,
    coverPosition,
    iconUrl,
    template,
    fullWidth,
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
          />
        </Suspense>
      )}
      <Panel.Container
        template={template}
        fullWidth={fullWidth}
        data-el='decor-panel'
      >
        {template === 'Notion' && iconUrl && (
          <Suspense fallback={<PageIconLoader />}>
            <PageIcon
              _id={_id}
              template={template}
              iconUrl={iconUrl}
              coverUrl={coverUrl}
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
}

export default PageDecorPanel
