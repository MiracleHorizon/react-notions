import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const CloseSidebarTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Close sidebar'
    desc='Ctrl+\'
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default CloseSidebarTooltip
