import React, { useRef, lazy, Suspense, useMemo } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import PageDecorPanel from 'components/DecorPanel'
import NotionTaskContentLoader from 'components/ui/loaders/NotionTaskContent'
import NotionTaskHeader from './Header'
import TaskStatusPanel from './StatusPanel'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Task from './NotionTask.styles'
import NotionContentItem from '../../Notion/Items'

const EmptyPage = lazy(
  () => import('components/Workspace/Templates/Notion/EmptyPage')
)

const NotionTask = () => {
  const {
    notionTask: { page },
    icon: { isOpen: isIconModalOpen },
    cover: { isOpen: isCoverModalOpen },
    appSettings: { isOpen: isAppSettingsModalOpen },
    changeStatus: { isOpen: isChangeStatusModalOpen },
    pageSettings: { isOpen: isPageSettingsModalOpen },
    tasksListOptions: { isOpen: isTasksListNotionsModalOpen },
  } = useTypedSelector(state => state.modals)
  const ref = useRef<HTMLDivElement>(null)
  const { closeNotionTaskModal } = useActions()

  const sortedContent = useMemo(() => {
    return page ? [...page.content].sort((a, b) => a.order - b.order) : []
  }, [page?.content]) // Лишний рендер

  useOnCloseModal(
    ref.current,
    !isCoverModalOpen &&
      !isPageSettingsModalOpen &&
      !isIconModalOpen &&
      !isAppSettingsModalOpen &&
      !isChangeStatusModalOpen &&
      !isTasksListNotionsModalOpen
      ? closeNotionTaskModal
      : null
  )

  if (!page) return null

  return (
    <ModalWrapper inset>
      <Task.Container ref={ref}>
        <NotionTaskHeader {...page} />
        <Task.Content fullWidth={page.fullWidth}>
          <PageDecorPanel {...page} />
          <TaskStatusPanel {...page} />
          {!page.iconUrl && !page.coverUrl && page.content.length === 0 ? (
            <Suspense fallback={<NotionTaskContentLoader />}>
              <EmptyPage {...page} />
            </Suspense>
          ) : (
            <>
              {/*{sortedContent.map(item => (*/}
              {/*  <NotionContentItem key={item._id} {...item} />*/}
              {/*))}*/}
              content
            </>
          )}
        </Task.Content>
      </Task.Container>
    </ModalWrapper>
  )
}

export default NotionTask
