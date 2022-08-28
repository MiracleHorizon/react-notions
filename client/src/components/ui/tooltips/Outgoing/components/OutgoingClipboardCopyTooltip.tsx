import React, { useEffect } from 'react'

import useActions from 'hooks/useActions'
import OutgoingTooltip from 'components/ui/tooltips/Outgoing/index'
import useTypedSelector from 'hooks/useTypedSelector'
import { CLIPBOARD_COPY_TOOLTIP_HIDE_DELAY } from 'utils/constants/app'

const OutgoingClipboardCopyTooltip = () => {
  const { hideClipboardCopyTooltip } = useActions()
  const { isActive } = useTypedSelector(s => s.alerts.clipboardCopyTooltip)

  useEffect(() => {
    setTimeout(() => {
      hideClipboardCopyTooltip()
    }, CLIPBOARD_COPY_TOOLTIP_HIDE_DELAY)
  }, [hideClipboardCopyTooltip])

  return (
    <OutgoingTooltip title='Copied property to clipboard' isActive={isActive} />
  )
}

export default OutgoingClipboardCopyTooltip
