import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import Loadable from 'react-loadable'

import PageTitle from './Title'
import DecorOptions from './Options'
import PageCoverLoader from 'components/ui/loaders/CoverLoader'
import PageIconLoader from 'components/ui/loaders/IconLoader'
import PageDescriptionLoader from 'components/ui/loaders/DescriptionLoader'
import { IPage } from 'models/page/IPage'
import * as Panel from './PageDecorPanel.styles'

const PageCover = Loadable({
  loader: () => import('./Cover'),
  loading: () => <PageCoverLoader />,
})

const PageIcon = Loadable({
  loader: () => import('./Icon'),
  loading: () => <PageIconLoader />,
})

const PageDescription = Loadable({
  loader: () => import('./Description'),
  loading: () => <PageDescriptionLoader />,
})

const PageDecorPanel: FC<IPage> = page => {
  const {
    _id,
    coverUrl,
    coverPosition,
    iconUrl,
    comments,
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
        <PageCover
          _id={_id}
          template={template}
          coverUrl={coverUrl}
          coverPosition={coverPosition}
        />
      )}
      <Panel.Container template={template} fullWidth={fullWidth}>
        {template === 'Notion' && iconUrl && (
          <PageIcon
            _id={_id}
            template={template}
            iconUrl={iconUrl}
            coverUrl={coverUrl}
          />
        )}
        <DecorOptions isHovering={isHovering} {...page} />
        <PageTitle {...page} />
        {template !== 'Notion' && descriptionExpanded && (
          <PageDescription _id={_id} description={description} />
        )}
        {comments.length > 0 && <>eqw</>}
      </Panel.Container>
    </Panel.Wrapper>
  )
}

export default PageDecorPanel
