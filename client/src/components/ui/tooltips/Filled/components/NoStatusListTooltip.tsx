import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled'
import { TDivRef } from 'types'

const NoStatusListTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Any items with an empty Status property will go here. This group cannot be removed.'
    pos='centerTop'
    invokerRef={reference}
  />
)

export default NoStatusListTooltip
