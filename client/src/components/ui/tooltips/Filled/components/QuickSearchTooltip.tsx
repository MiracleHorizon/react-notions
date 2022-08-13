import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled'
import { TDivRef } from 'types'

const QuickSearchTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Search and quickly jump to a page'
    desc='Ctrl+P'
    pos='rightCenter'
    invokerRef={reference}
  />
)

export default QuickSearchTooltip
