import React from 'react'

import useTypedSelector from 'hooks/useTypedSelector'

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
import NotionTask from 'components/Workspace/Templates/NotionsList/NotionTask'
import ChangeCoverModal from './components/ChangeDecor/ChangeCover'
import ChangeStatusModal from './components/ChangeStatus'
import NotionContentItemDecorModal from './components/NotionContentItemDecor'
import NotionContentItemOptionsModal from './components/NotionContentItemOptions'
import CreateNotionContentItemModal from './components/CreateNotionContentItem'
import QuickSearchModal from './components/QuickSearch'
import CreateWebBookmarkModal from './components/CreateWebBookmark'

const ModalsOverlay = () => {
  const {
    icon: { isOpen: isIconModalOpen },
    cover: { isOpen: isCoverModalOpen },
    rename: { isOpen: isRenameModalOpen },
    trash: { isOpen: isPagesTrashModalOpen },
    movePage: { isOpen: isMovePageModalOpen },
    notionTask: { isOpen: isNotionTaskModalOpen },
    appSettings: { isOpen: isAppSettingsModalOpen },
    quickSearch: { isOpen: isQuickSearchModalOpen },
    webBookmark: { isOpen: isWebBookmarkModalOpen },
    pageOptions: { isOpen: isPageOptionsModalOpen },
    changeStatus: { isOpen: isChangeStatusModalOpen },
    pageSettings: { isOpen: isPageSettingsModalOpen },
    hiddenTasksList: { isOpen: isHiddenTasksListModalOpen },
    tasksListOptions: { isOpen: isTasksListOptionsModalOpen },
    handleTasksList: { isOpen: isHandleTasksListTitleModalOpen },
    notionItemDecor: { isOpen: isNotionContentItemDecorModalOpen },
    notionItemOptions: { isOpen: isNotionContentItemOptionsModalOpen },
    createNotionContentItem: { isOpen: isCreateNotionContentItemModalOpen },
  } = useTypedSelector(state => state.modals)

  // Suspense

  return (
    <>
      {isNotionTaskModalOpen && <NotionTask />}
      {isIconModalOpen && <ChangeIconModal />}
      {isCoverModalOpen && <ChangeCoverModal />}
      {isRenameModalOpen && <RenamePageModal />}
      {isMovePageModalOpen && <MovePageModal />}
      {isPagesTrashModalOpen && <PagesTrashModal />}
      {isAppSettingsModalOpen && <AppSettingsModal />}
      {isWebBookmarkModalOpen && <CreateWebBookmarkModal />}
      {isQuickSearchModalOpen && <QuickSearchModal />}
      {isPageOptionsModalOpen && <PageOptionsModal />}
      {isPageSettingsModalOpen && <PageSettingsModal />}
      {isChangeStatusModalOpen && <ChangeStatusModal />}
      {isHiddenTasksListModalOpen && <HiddenTasksListModal />}
      {isTasksListOptionsModalOpen && <TasksListOptionsModal />}
      {isHandleTasksListTitleModalOpen && <HandleTasksListTitleModal />}
      {isNotionContentItemDecorModalOpen && <NotionContentItemDecorModal />}
      {isNotionContentItemOptionsModalOpen && <NotionContentItemOptionsModal />}
      {isCreateNotionContentItemModalOpen && <CreateNotionContentItemModal />}
    </>
  )
}

export default ModalsOverlay
