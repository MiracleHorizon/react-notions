import React from 'react'

import ClassicAlert from 'components/ui/alerts/Classic'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useDeletePageMutation } from 'store/slices/pages/pages.api'

const DeletePageAlert = () => {
  const { pageId } = useTypedSelector(state => state.alerts.deletePage)
  const [deletePage] = useDeletePageMutation()
  const { hideDeletePageAlert } = useActions()

  const handleSubmitDelete = () => {
    deletePage(pageId)
    hideDeletePageAlert()
  }

  const handleHideAlert = () => hideDeletePageAlert()

  return (
    <ClassicAlert
      title='Are you sure you want to delete this page permanently?'
      closeAction={handleSubmitDelete}
    >
      <>
        <OutlineButton
          color='red'
          title='Yes. Delete this page'
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

export default DeletePageAlert
