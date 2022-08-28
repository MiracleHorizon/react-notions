import React, { useCallback } from 'react'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useDeletePageMutation } from 'services/notions.api'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'

const DeletePageAlert = () => {
  const { hideDeletePageAlert } = useActions()
  const { pageId } = useTypedSelector(s => s.alerts.deletePage)
  const [deletePage] = useDeletePageMutation()

  const handleSubmitDelete = useCallback(() => {
    deletePage(pageId)
    hideDeletePageAlert()
  }, [pageId, deletePage, hideDeletePageAlert])

  const handleHideAlert = () => hideDeletePageAlert()

  return (
    <DefaultAlert
      title='Are you sure you want to delete this page permanently?'
      closeAction={handleSubmitDelete}
    >
      <>
        <OutlineButton
          title='Yes. Delete this page'
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

export default DeletePageAlert
