import React, { useMemo, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router'

import TaskStatusPanel from 'components/PagePanels/Status'
import CreateNotionItemBar from './CreateItemBar'
import NotionContentItem from './Items'
import NotionPageLoader from 'components/ui/loaders/NotionPage'
import useTypedSelector from 'hooks/useTypedSelector'
import pageContentSorter from 'utils/helpers/pageContentSorter'
import * as Template from './NotionTemplate.styles'
import NotionContent from './Content'

const EmptyPage = lazy(() => import('./EmptyPage'))

const NotionTemplate = () => {
  const { page } = useTypedSelector(state => state.pages)
  const navigate = useNavigate()

  if (!page) return null // TODO navigate('*')

  if (!page.iconUrl && !page.coverUrl && page.content.length === 0) {
    return (
      <Suspense fallback={<NotionPageLoader />}>
        <EmptyPage {...page} />
      </Suspense>
    )
  }

  return (
    <Template.Wrapper>
      <Template.Container fullWidth={page.fullWidth}>
        {page.status !== null && <TaskStatusPanel {...page} />}
        <NotionContent {...page} />
        <CreateNotionItemBar {...page} />
      </Template.Container>
    </Template.Wrapper>
  )
}

export default NotionTemplate
