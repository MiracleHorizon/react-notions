import React from 'react'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useDeleteTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton/outlineButton.models'

const DeleteTasksListAlert = () => {
  const { listId } = useTypedSelector(state => state.alerts.deleteTasksList)
  const [deleteTasksList] = useDeleteTasksListMutation()
  const { hideDeleteTasksListAlert, closeHiddenTasksListModal } = useActions()

  const handleSubmitDelete = async () => {
    await deleteTasksList(listId)
    hideDeleteTasksListAlert()
    closeHiddenTasksListModal()
  }

  const handleHideAlert = () => hideDeleteTasksListAlert()

  return (
    <DefaultAlert
      title='Are you sure? All blocks inside this group will be deleted.'
      closeAction={handleSubmitDelete}
    >
      <>
        <OutlineButton
          color={OutlineButtonColorsEnum.RED}
          title='Delete'
          onClickAction={handleSubmitDelete}
        />
        <OutlineButton
          color={OutlineButtonColorsEnum.GRAY}
          title='Cancel'
          onClickAction={handleHideAlert}
        />
      </>
    </DefaultAlert>
  )
}

export default DeleteTasksListAlert