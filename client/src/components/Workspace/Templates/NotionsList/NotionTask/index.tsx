import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals'
import PageDecorPanel from 'components/DecorPanel'
import NotionTaskHeader from './Header'
import TaskStatusPanel from './StatusPanel'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Task from './NotionTask.styles'

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

  if (!page) return null

  return (
    <ModalWrapper inset>
      <Task.Container ref={ref}>
        <NotionTaskHeader {...page} />
        <Task.Content fullWidth={page.fullWidth}>
          <PageDecorPanel {...page} />
          <TaskStatusPanel {...page} />
        </Task.Content>
      </Task.Container>
    </ModalWrapper>
  )
}

export default NotionTask
