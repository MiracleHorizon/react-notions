import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const ChangeIconTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Change icon'
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default ChangeIconTooltip
