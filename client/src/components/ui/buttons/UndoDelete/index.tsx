import React from 'react'

import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useRestorePageMutation } from 'services/notions.api'
import * as Button from './UndoDeleteButton.styles'

const UndoDeleteButton = () => {
  const { hideMovedToTrashTooltip } = useActions()
  const { pageId } = useTypedSelector(s => s.alerts.movedToTrashTooltip)
  const [restorePage] = useRestorePageMutation()

  const handleUndoDeletePage = () => {
    restorePage(pageId)
    hideMovedToTrashTooltip()
  }

  return (
    <Button.Container
      role='button'
      data-btn='undo-delete'
      onClick={handleUndoDeletePage}
    >
      <Button.Title>Undo</Button.Title>
    </Button.Container>
  )
}

export default UndoDeleteButton
