import React, { FC, memo, useRef, Suspense, lazy } from 'react'
import ContentEditable from 'react-contenteditable'

import PageIconLoader from 'components/ui/loaders/Icon'
import useContentEditable from 'hooks/useContentEditable'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import IPage from 'models/page/IPage'
import * as Title from './PageTitle.styles'

const PageIcon = lazy(() => import('../Icon'))

const PageTitle: FC<IPage> = memo(
  ({ _id, template, title, iconUrl, coverUrl, font }) => {
    const [updatePage] = useUpdatePageMutation()
    const ref = useRef<HTMLDivElement>(null)

    const handleSubmitChanges = (value: string) => {
      if (value === title) return
      updatePage({ _id, body: { title: value } })
    }

    const { value, handleChange, handleEnterKey, handleBlur } =
      useContentEditable(title, handleSubmitChanges, ref)

    return (
      <Title.Wrapper>
        <Title.Container template={template} iconUrl={iconUrl} font={font}>
          {template === 'NotionsList' && iconUrl && (
            <Suspense fallback={<PageIconLoader />}>
              <PageIcon
                _id={_id}
                template={template}
                iconUrl={iconUrl}
                coverUrl={coverUrl}
              />
            </Suspense>
          )}
          <ContentEditable
            innerRef={ref}
            placeholder='Untitled'
            html={value}
            onChange={handleChange}
            onKeyDown={handleEnterKey}
            onBlur={handleBlur}
          />
        </Title.Container>
      </Title.Wrapper>
    )
  }
)

export default PageTitle
