import React, { useEffect } from 'react'

import OutgoingTooltip from 'components/ui/tooltips/Outgoing/index'
import UndoDeleteButton from 'components/ui/buttons/UndoDelete'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { OUTGOING_TOOLTIP_HIDE_DELAY } from 'utils/constants/app'

const MovedToTrashTooltip = () => {
  const { hideMovedToTrashTooltip } = useActions()
  const { isActive } = useTypedSelector(s => s.alerts.movedToTrashTooltip)

  useEffect(() => {
    setTimeout(() => {
      hideMovedToTrashTooltip()
    }, OUTGOING_TOOLTIP_HIDE_DELAY)
  }, [hideMovedToTrashTooltip])

  return (
    <OutgoingTooltip
      title='Moved to trash'
      isActive={isActive}
      EndButton={UndoDeleteButton}
    />
  )
}

export default MovedToTrashTooltip
