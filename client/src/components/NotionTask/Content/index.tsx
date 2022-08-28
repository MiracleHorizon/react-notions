import React, { FC, useRef, useState, lazy, Suspense, memo } from 'react'
import { useEventListener } from 'usehooks-ts'

import PageDecorPanel from 'components/PagePanels/Decor'
import NotionContent from 'components/PageTemplates/Notion/Content'
import TaskStatusPanel from 'components/PagePanels/Status'
import CreateNotionItemBar from 'components/PageTemplates/Notion/CreateItemBar'
import NotionTaskContentLoader from 'components/ui/loaders/NotionTaskContent'
import useTypedSelector from 'hooks/useTypedSelector'
import handleIsPageEmpty from 'utils/helpers/handleIsPageEmpty'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import IPage from 'models/page/IPage'
import * as Content from './NotionTaskContent.styles'

const EmptyPage = lazy(() => import('components/PageTemplates/Notion/EmptyPage'))

const NotionTaskContent: FC<IPage> = memo(page => {
  const [creatingItem, setCreatingItem] = useState<boolean>(false)
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)
  const { isOpen: isOverLimitFileSizeAlertOpen } = useTypedSelector(s => s.alerts.overLimitFileSize)
  const ref = useRef<HTMLDivElement>(null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setScrollBottom }),
    ref
  )

  return (
    <Content.Wrapper
      ref={ref}
      fullWidth={page.fullWidth}
      isScrollOnBottom={isScrollOnBottom}
      isOverLimitFileSizeAlertOpen={isOverLimitFileSizeAlertOpen}
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
