import React from 'react'

import DeletePageAlert from './Classic/components/DeletePageAlert'
import AlreadyExistAlert from './Classic/components/AlreadyExistAlert'
import DeleteTasksListAlert from './Classic/components/DeleteTasksListAlert'
import useTypedSelector from 'hooks/useTypedSelector'

const AlertsOverlay = () => {
  const {
    deletePage: { isOpen: isDeletePageAlertOpen },
    alreadyExist: { isOpen: isAlreadyExistAlertOpen },
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
  } = useTypedSelector(state => state.alerts)

  return (
    <>
      {isDeletePageAlertOpen && <DeletePageAlert />}
      {isAlreadyExistAlertOpen && <AlreadyExistAlert />}
      {isDeleteTasksListAlertOpen && <DeleteTasksListAlert />}
    </>
  )
}

export default AlertsOverlay
