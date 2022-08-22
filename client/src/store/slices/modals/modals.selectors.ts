import { RootState } from 'store'

export const selectNotionTaskClosable = (state: RootState): boolean => {
  const {
    icon: { isOpen: isIconModalOpen },
    cover: { isOpen: isCoverModalOpen },
    quickSearch: { isOpen: isQuickSearchModalOpen },
    appSettings: { isOpen: isAppSettingsModalOpen },
    changeStatus: { isOpen: isChangeStatusModalOpen },
    pageSettings: { isOpen: isPageSettingsModalOpen },
    tasksListOptions: { isOpen: isTasksListNotionsModalOpen },
    notionItemDecor: { isOpen: isNotionItemDecorModalOpen },
    notionItemOptions: { isOpen: isNotionItemOptionsModalOpen },
    createNotionContentItem: { isOpen: isCreateNotionContentItemModalOpen },
  } = state.modals

  return (
    !isIconModalOpen &&
    !isCoverModalOpen &&
    !isQuickSearchModalOpen &&
    !isAppSettingsModalOpen &&
    !isChangeStatusModalOpen &&
    !isPageSettingsModalOpen &&
    !isTasksListNotionsModalOpen &&
    !isNotionItemDecorModalOpen &&
    !isNotionItemOptionsModalOpen &&
    !isCreateNotionContentItemModalOpen
  )
}

export const selectHiddenTasksListModalClosable = (
  state: RootState
): boolean => {
  const {
    pageOptions: { isOpen: isPageOptionsModalOpen },
    handleTasksList: { isOpen: isHandleTasksListTitleModalOpen },
    tasksListOptions: { isOpen: isTasksListOptionsModalOpen },
  } = state.modals
  const {
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
  } = state.alerts

  return (
    !isTasksListOptionsModalOpen &&
    !isHandleTasksListTitleModalOpen &&
    !isPageOptionsModalOpen &&
    !isDeleteTasksListAlertOpen
  )
}

export const selectMovePageModalState = (state: RootState) => state.modals.movePage
