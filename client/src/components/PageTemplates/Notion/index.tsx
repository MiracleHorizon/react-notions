import React, { lazy, Suspense, useState } from 'react'

import NotionContent from './Content'
import TaskStatusPanel from 'components/PagePanels/Status'
import CreateNotionItemBar from './CreateItemBar'
import NotionPageLoader from 'components/ui/loaders/NotionPage'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Template from './NotionTemplate.styles'

const EmptyPage = lazy(() => import('./EmptyPage'))

const NotionTemplate = () => {
  const { page } = useTypedSelector(s => s.notions)
  const [creatingItem, setCreatingItem] = useState<boolean>(false)

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
        {page.status && <TaskStatusPanel {...page} />}
        <NotionContent {...page} creatingItem={creatingItem} />
        <CreateNotionItemBar {...page} setCreatingItem={setCreatingItem} />
      </Template.Container>
    </Template.Wrapper>
  )
}

export default NotionTemplate
