import React, { useRef, useMemo, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import PageDecorPanel from 'components/PagePanels/Decor'
import NotionTaskContentLoader from 'components/ui/loaders/NotionTaskContent'
import NotionContent from 'components/Workspace/Templates/Notion/Content'
import NotionTaskHeader from './Header'
import TaskStatusPanel from 'components/PagePanels/Status'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import pageContentSorter from 'utils/helpers/pageContentSorter'
import * as Task from './NotionTask.styles'

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
  const navigate = useNavigate()
  const { closeNotionTaskModal } = useActions()

  const sortedContent = useMemo(() => pageContentSorter(page), [page?.content]) // Лишний рендер

  const handleOpenFullWidth = (e: KeyboardEvent) => {
    if (!page) return

    if (e.code === 'Enter' && e.ctrlKey) {
      navigate(`/workspace/${page._id}`)
      closeNotionTaskModal()
    }
  }

  useCloseModal(
    ref,
    !isCoverModalOpen &&
      !isPageSettingsModalOpen &&
      !isIconModalOpen &&
      !isAppSettingsModalOpen &&
      !isChangeStatusModalOpen &&
      !isTasksListNotionsModalOpen
      ? closeNotionTaskModal
      : null
  )

  useEventListener('keydown', handleOpenFullWidth)

  if (!page) return null

  return (
    <ModalWrapper inset>
      <Task.Wrapper ref={ref}>
        <NotionTaskHeader {...page} />
        <Task.Container fullWidth={page.fullWidth}>
          <PageDecorPanel {...page} />
          <Task.Content>
            {!page.iconUrl && !page.coverUrl && page.content.length === 0 ? (
              <Suspense fallback={<NotionTaskContentLoader />}>
                <EmptyPage {...page} />
              </Suspense>
            ) : (
              <>
                <TaskStatusPanel {...page} />
                <NotionContent {...page} />
              </>
            )}
          </Task.Content>
        </Task.Container>
      </Task.Wrapper>
    </ModalWrapper>
  )
}

export default NotionTask
