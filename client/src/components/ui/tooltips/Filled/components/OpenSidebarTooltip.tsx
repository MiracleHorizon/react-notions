import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const OpenSidebarTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Lock sidebar open'
    desc='Ctrl+\\'
    pos='rightCenter'
    invokerRef={reference}
  />
)

export default OpenSidebarTooltip
