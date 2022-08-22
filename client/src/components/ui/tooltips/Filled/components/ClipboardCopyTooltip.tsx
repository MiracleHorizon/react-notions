import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const ClipboardCopyTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Copy to clipboard'
    pos='centerTop'
    invokerRef={reference}
  />
)

export default ClipboardCopyTooltip
