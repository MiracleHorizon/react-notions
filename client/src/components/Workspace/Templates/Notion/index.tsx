import React, { lazy, Suspense, useMemo } from 'react'
import { useNavigate } from 'react-router'

import CreateNotionItemBar from './CreateItemBar'
import NotionContentItem from './Items'
import NotionPageLoader from 'components/ui/loaders/NotionPage'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Template from './NotionTemplate.styles'

const EmptyPage = lazy(() => import('./EmptyPage'))

const NotionTemplate = () => {
  const { page } = useTypedSelector(state => state.pages)
  const navigate = useNavigate()

  const sortedContent = useMemo(() => {
    return page ? [...page.content].sort((a, b) => a.order - b.order) : []
  }, [page?.content]) // Лишний рендер

  if (!page) return null // TODO navigate('*')

  if (!page.iconUrl && !page.coverUrl && page.content.length === 0) {
    return (
      <Suspense fallback={<NotionPageLoader />}>
        <EmptyPage {...page} />
      </Suspense>
    )
  }

  return (
    <Template.Wrapper fullWidth={page.fullWidth}>
      <Template.Container>
        {sortedContent.map(item => (
          <NotionContentItem key={item._id} {...item} />
        ))}
        <CreateNotionItemBar {...page} />
      </Template.Container>
    </Template.Wrapper>
  )
}

export default NotionTemplate
