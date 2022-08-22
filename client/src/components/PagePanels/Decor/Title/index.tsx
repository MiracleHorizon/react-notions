import React, { FC, memo, lazy, Suspense } from 'react'

import PageIconLoader from 'components/ui/loaders/Icon'
import IPage from 'models/page/IPage'
import * as Title from './PageTitle.styles'

const PageIcon = lazy(() => import('../Icon - Checked'))

const PageTitle: FC<IPage> = memo(
  ({ _id, template, title, iconUrl, coverUrl, font, locked, smallText }) => (
    <Title.Wrapper>
      <Title.Container>
        {template === 'NotionsList' && iconUrl && (
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
        <Title.Value
          font={font}
          smallText={smallText}
          iconUrl={iconUrl}
          template={template}
        >
          {title}
        </Title.Value>
      </Title.Container>
    </Title.Wrapper>
  )
)

export default PageTitle
