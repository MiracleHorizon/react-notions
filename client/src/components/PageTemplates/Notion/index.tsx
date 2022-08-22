import React, { lazy, Suspense, useState } from 'react'
import { useNavigate } from 'react-router'

import NotionContent from './Content'
import TaskStatusPanel from 'components/PagePanels - Checked/Status - Checked'
import CreateNotionItemBar from './CreateItemBar - Checked'
import NotionPageLoader from 'components/ui/loaders/NotionPage'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Template from './NotionTemplate.styles'

const EmptyPage = lazy(() => import('./EmptyPage - Checked'))

const NotionTemplate = () => {
  const [creatingItem, setCreatingItem] = useState<boolean>(false)
  const { page } = useTypedSelector(s => s.pages)

  if (page && !page.iconUrl && !page.coverUrl && page.content.length === 0) {
    return (
      <Suspense fallback={<NotionPageLoader />}>
        <EmptyPage {...page} />
      </Suspense>
    )
  }

  if (!page) return null

  return (
    <Template.Wrapper>
      <Template.Container fullWidth={page.fullWidth}>
        {page.status !== null && <TaskStatusPanel {...page} />}
        <NotionContent {...page} creatingItem={creatingItem} />
        <CreateNotionItemBar {...page} setCreatingItem={setCreatingItem} />
      </Template.Container>
    </Template.Wrapper>
  )
}

export default NotionTemplate
