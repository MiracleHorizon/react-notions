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

export const selectMovePageModalState = (state: RootState) =>
  state.modals.movePage

export const selectIsDropdownsClose = (state: RootState): boolean => {
  const {
    theme: { isOpen: isOpenThemeDropdownOpen },
    startOpen: { isOpen: isStartOpenDropdownOpen },
  } = state.modals.dropdown

  return !isOpenThemeDropdownOpen && !isStartOpenDropdownOpen
}

export const selectEmptyPageItemSelectable = (state: RootState): boolean => {
  const {
    changeStatus: { isOpen: isChangeStatusModalOpen },
    pageSettings: { isOpen: isPageSettingsModalOpen },
    pageOptions: { isOpen: isPageOptionsModalOpen },
    appSettings: { isOpen: isAppSettingsModalOpen },
    quickSearch: { isOpen: isQuickSearchModalOpen },
    icon: { isOpen: isChangeIconModalOpen },
    rename: { isOpen: isRenameModalOpen },
  } = state.modals

  return (
    !isChangeStatusModalOpen &&
    !isPageSettingsModalOpen &&
    !isPageOptionsModalOpen &&
    !isAppSettingsModalOpen &&
    !isQuickSearchModalOpen &&
    !isChangeIconModalOpen &&
    !isRenameModalOpen
  )
}
