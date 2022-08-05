import React from 'react'

import ClassicAlert from 'components/ui/alerts/Classic'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useDeleteTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'

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
    <ClassicAlert
      title='Are you sure? All blocks inside this group will be deleted.'
      closeAction={handleSubmitDelete}
    >
      <>
        <OutlineButton
          color='red'
          title='Delete'
          onClickAction={handleSubmitDelete}
        />
        <OutlineButton
          color='gray'
          title='Cancel'
          onClickAction={handleHideAlert}
        />
      </>
    </ClassicAlert>
  )
}

export default DeleteTasksListAlert
