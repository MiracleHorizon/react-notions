import React from 'react'

import DeletePageAlert from './Default/components/DeletePageAlert'
import AlreadyExistAlert from './Default/components/AlreadyExistAlert'
import DeleteTasksListAlert from './Default/components/DeleteTasksListAlert'
import NotSavedChangesAlert from './Default/components/NotSavedChangesAlert'
import FillNameAlert from './Default/components/FillNameAlert'
import { OutgoingClipboardCopyTooltip, MovedToTrashTooltip } from '../tooltips'
import useTypedSelector from 'hooks/useTypedSelector'

const AlertsOverlay = () => {
  const {
    deletePage: { isOpen: isDeletePageAlertOpen },
    alreadyExist: { isOpen: isAlreadyExistAlertOpen },
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
    notSavedChanges: { isOpen: isNotSavedChangesAlertOpen },
    fillName: { isOpen: isFillNameAlertOpen },
  } = useTypedSelector(s => s.alerts)

  return (
    <>
      {isDeletePageAlertOpen && <DeletePageAlert />}
      {isAlreadyExistAlertOpen && <AlreadyExistAlert />}
      {isDeleteTasksListAlertOpen && <DeleteTasksListAlert />}
      {isNotSavedChangesAlertOpen && <NotSavedChangesAlert />}
      {isFillNameAlertOpen && <FillNameAlert />}
      <OutgoingClipboardCopyTooltip />
      <MovedToTrashTooltip />
    </>
  )
}

export default AlertsOverlay
