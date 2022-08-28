import React, { useCallback } from 'react'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useDeleteTasksListMutation } from 'services/tasksLists.api'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'

const DeleteTasksListAlert = () => {
  const { hideDeleteTasksListAlert, closeHiddenTasksListModal } = useActions()
  const { listId } = useTypedSelector(s => s.alerts.deleteTasksList)
  const [deleteTasksList] = useDeleteTasksListMutation()

  const handleSubmitDelete = useCallback(() => {
    deleteTasksList(listId)
    hideDeleteTasksListAlert()
    closeHiddenTasksListModal()
  }, [
    listId,
    deleteTasksList,
    hideDeleteTasksListAlert,
    closeHiddenTasksListModal,
  ])

  const handleHideAlert = () => hideDeleteTasksListAlert()

  return (
    <DefaultAlert
      title='Are you sure? All blocks inside this group will be deleted.'
      closeAction={handleSubmitDelete}
    >
      <>
        <OutlineButton
          title='Delete'
          color={OutlineButtonColorsEnum.RED}
          onClickAction={handleSubmitDelete}
        />
        <OutlineButton
          title='Cancel'
          color={OutlineButtonColorsEnum.GRAY}
          onClickAction={handleHideAlert}
        />
      </>
    </DefaultAlert>
  )
}

export default DeleteTasksListAlert
