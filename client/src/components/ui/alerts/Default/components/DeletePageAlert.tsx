import React from 'react'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useDeletePageMutation } from 'store/slices/pages/pages.api'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton/outlineButton.models'

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
    <DefaultAlert
      title='Are you sure you want to delete this page permanently?'
      closeAction={handleSubmitDelete}
    >
      <>
        <OutlineButton
          title='Yes. Delete this page'
          color={OutlineButtonColorsEnum.GRAY}
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

export default DeletePageAlert
