import React from 'react'

import PageOptionsModal from './components/PageOptions'
import PageSettingsModal from './components/PageSettings'
import MovePageModal from './components/MovePage'
import ChangeIconModal from './components/ChangeDecor/ChangeIcon'
import TasksListOptionsModal from './components/NotionsListTemplate/TasksListOptions'
import HandleTasksListTitleModal from './components/NotionsListTemplate/HandleTasksListTitle'
import HiddenTasksListModal from './components/NotionsListTemplate/HiddenTasksList'
import RenamePageModal from './components/RenamePage'
import AppSettingsModal from './components/AppSettings'
import PagesTrashModal from './components/PagesTrash'
import useTypedSelector from 'hooks/useTypedSelector'

const ModalsOverlay = () => {
  const {
    icon: { isOpen: isIconModalOpen },
    rename: { isOpen: isRenameModalOpen },
    trash: { isOpen: isPagesTrashModalOpen },
    movePage: { isOpen: isMovePageModalOpen },
    appSettings: { isOpen: isAppSettingsModalOpen },
    pageOptions: { isOpen: isPageOptionsModalOpen },
    pageSettings: { isOpen: isPageSettingsModalOpen },
    hiddenTasksList: { isOpen: isHiddenTasksListModalOpen },
    tasksListsOptions: { isOpen: isTasksListOptionsModalOpen },
    handleTasksList: { isOpen: isHandleTasksListTitleModalOpen },
  } = useTypedSelector(state => state.modals)

  return (
    <>
      {isIconModalOpen && <ChangeIconModal />}
      {isRenameModalOpen && <RenamePageModal />}
      {isMovePageModalOpen && <MovePageModal />}
      {isPagesTrashModalOpen && <PagesTrashModal />}
      {isAppSettingsModalOpen && <AppSettingsModal />}
      {isPageOptionsModalOpen && <PageOptionsModal />}
      {isPageSettingsModalOpen && <PageSettingsModal />}
      {isHiddenTasksListModalOpen && <HiddenTasksListModal />}
      {isTasksListOptionsModalOpen && <TasksListOptionsModal />}
      {isHandleTasksListTitleModalOpen && <HandleTasksListTitleModal />}
    </>
  )
}

export default ModalsOverlay
