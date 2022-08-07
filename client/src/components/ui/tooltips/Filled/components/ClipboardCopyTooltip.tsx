import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { TooltipsCoordsHandler } from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const ClipboardCopyTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Copy to clipboard'
    coords={TooltipsCoordsHandler.clipboardCopy(reference)}
    transX
  />
)

export default ClipboardCopyTooltip
