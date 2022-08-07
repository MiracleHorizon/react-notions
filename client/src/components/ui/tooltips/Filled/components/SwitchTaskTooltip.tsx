import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { TooltipsCoordsHandler } from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const SwitchTaskTooltip: FC<{
  reference: TDivRef
  dest: 'prev' | 'next'
}> = ({ reference, dest }) => (
  <FilledTooltip
    title={`${dest === 'prev' ? 'Previous' : 'Next'} page`}
    desc={`Alt+${dest === 'prev' ? 'K' : 'J'}`}
    coords={TooltipsCoordsHandler.switchTask(reference)}
    transX
  />
)

export default SwitchTaskTooltip
