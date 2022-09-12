import React from 'react'

import DeletePageAlert from './Default/components/DeletePageAlert'
import AlreadyExistAlert from './Default/components/AlreadyExistAlert'
import DeleteTasksListAlert from './Default/components/DeleteTasksListAlert'
import NotSavedChangesAlert from './Default/components/NotSavedChangesAlert'
import FillNameAlert from './Default/components/FillNameAlert'
import ChangePasswordAlert from './Default/components/ChangePasswordAlert'
import { OutgoingClipboardCopyTooltip, MovedToTrashTooltip } from '../tooltips'
import useTypedSelector from 'hooks/useTypedSelector'
import DeleteAccountAlert from './DeleteAccount'
import FillEmailAlert from './Default/components/FillEmailAlert'

const AlertsOverlay = () => {
  const {
    deletePage: { isOpen: isDeletePageAlertOpen },
    alreadyExist: { isOpen: isAlreadyExistAlertOpen },
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
    fillName: { isOpen: isFillNameAlertOpen },
    fillEmail: { isOpen: isFillEmailAlertOpen },
    changePassword: { isOpen: isChangePasswordAlertOpen },
    deleteAccount: { isOpen: isDeleteAccountAlertOpen },
    notSavedChanges: { isOpen: isNotSavedChangesAlertOpen },
  } = useTypedSelector(s => s.alerts)

  return (
    <>
      {isDeletePageAlertOpen && <DeletePageAlert />}
      {isAlreadyExistAlertOpen && <AlreadyExistAlert />}
      {isDeleteTasksListAlertOpen && <DeleteTasksListAlert />}
      {isFillNameAlertOpen && <FillNameAlert />}
      {isFillEmailAlertOpen && <FillEmailAlert />}
      {isChangePasswordAlertOpen && <ChangePasswordAlert />}
      {isDeleteAccountAlertOpen && <DeleteAccountAlert />}
      {isNotSavedChangesAlertOpen && <NotSavedChangesAlert />}
      <OutgoingClipboardCopyTooltip />
      <MovedToTrashTooltip />
    </>
  )
}

export default AlertsOverlay
