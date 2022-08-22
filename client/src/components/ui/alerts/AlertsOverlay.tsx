import React from 'react'

import DeletePageAlert from './Default/components/DeletePageAlert'
import AlreadyExistAlert from './Default/components/AlreadyExistAlert'
import DeleteTasksListAlert from './Default/components/DeleteTasksListAlert'
import useTypedSelector from 'hooks/useTypedSelector'

const AlertsOverlay = () => {
  const {
    deletePage: { isOpen: isDeletePageAlertOpen },
    alreadyExist: { isOpen: isAlreadyExistAlertOpen },
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
  } = useTypedSelector(s => s.alerts)

  return (
    <>
      {isDeletePageAlertOpen && <DeletePageAlert />}
      {isAlreadyExistAlertOpen && <AlreadyExistAlert />}
      {isDeleteTasksListAlertOpen && <DeleteTasksListAlert />}
    </>
  )
}

export default AlertsOverlay
