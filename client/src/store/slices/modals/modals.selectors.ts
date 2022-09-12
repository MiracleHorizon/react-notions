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
    notionTask: { isOpen: isNotionsTaskModalOpen },
    pageOptions: { isOpen: isPageOptionsModalOpen },
    handleTasksList: { isOpen: isHandleTasksListTitleModalOpen },
    tasksListOptions: { isOpen: isTasksListOptionsModalOpen },
  } = state.modals
  const {
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
  } = state.alerts

  return (
    !isNotionsTaskModalOpen &&
    !isTasksListOptionsModalOpen &&
    !isHandleTasksListTitleModalOpen &&
    !isPageOptionsModalOpen &&
    !isDeleteTasksListAlertOpen
  )
}

export const selectMovePageModalState = (state: RootState) =>
  state.modals.movePage

export const selectAppSettingsModalClosable = (state: RootState): boolean => {
  const {
    dropdown: {
      theme: { isOpen: isOpenThemeDropdownOpen },
      startOpen: { isOpen: isStartOpenDropdownOpen },
    },
    changePassword: { isOpen: isChangePasswordModalOpen },
    changeEmail: { isOpen: isChangeEmailModalOpen },
  } = state.modals
  const {
    fillEmail: { isOpen: isFillEmailAlertOpen },
    deleteAccount: { isOpen: isDeleteAccountAlertOpen },
    changePassword: { isOpen: isChangePasswordAlertOpen },
  } = state.alerts

  return (
    !isOpenThemeDropdownOpen &&
    !isStartOpenDropdownOpen &&
    !isChangePasswordModalOpen &&
    !isChangeEmailModalOpen &&
    !isFillEmailAlertOpen &&
    !isDeleteAccountAlertOpen &&
    !isChangePasswordAlertOpen
  )
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
