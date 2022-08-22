import React, { FC, useRef, useState, lazy, Suspense, memo } from 'react'
import { useEventListener } from 'usehooks-ts'

import PageDecorPanel from 'components/PagePanels - Checked/Decor - Checked'
import NotionContent from '../../PageTemplates - Checked/Notion - Checked/Content'
import TaskStatusPanel from 'components/PagePanels - Checked/Status - Checked'
import CreateNotionItemBar from '../../PageTemplates - Checked/Notion - Checked/CreateItemBar - Checked'
import NotionTaskContentLoader from 'components/ui/loaders/NotionTaskContent'
import handleIsPageEmpty from 'utils/helpers/handleIsPageEmpty'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import IPage from 'models/page/IPage'
import * as Content from './NotionTaskContent.styles'

const EmptyPage = lazy(
  () =>
    import('components/PageTemplates - Checked/Notion - Checked/EmptyPage - Checked')
)

const NotionTaskContent: FC<IPage> = memo(page => {
  const [creatingItem, setCreatingItem] = useState<boolean>(false)
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setOnBottom }),
    ref
  )

  return (
    <Content.Wrapper
      ref={ref}
      fullWidth={page.fullWidth}
      isOnBottom={isOnBottom}
    >
      <PageDecorPanel {...page} />
      <Content.Container>
        {handleIsPageEmpty(page) ? (
          <Suspense fallback={<NotionTaskContentLoader />}>
            <EmptyPage {...page} />
          </Suspense>
        ) : (
          <>
            <TaskStatusPanel {...page} />
            <NotionContent {...page} creatingItem={creatingItem} />
            <CreateNotionItemBar {...page} setCreatingItem={setCreatingItem} />
          </>
        )}
      </Content.Container>
    </Content.Wrapper>
  )
})

export default NotionTaskContent
