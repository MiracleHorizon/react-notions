import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled'
import { TDivRef } from 'types'

const SwitchTaskTooltip: FC<{
  reference: TDivRef
  dest: 'prev' | 'next'
}> = ({ reference, dest }) => (
  <FilledTooltip
    title={`${dest === 'prev' ? 'Previous' : 'Next'} page`}
    desc={`Alt+${dest === 'prev' ? 'K' : 'J'}`}
    invokerRef={reference}
    pos='centerTop'
  />
)

export default SwitchTaskTooltip
