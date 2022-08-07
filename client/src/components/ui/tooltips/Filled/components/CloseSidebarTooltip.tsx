import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { TooltipsCoordsHandler } from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

interface PropTypes {
  location: 'left' | 'right'
  reference: TDivRef
}

const CloseSidebarTooltip: FC<PropTypes> = ({ location, reference }) => (
  <FilledTooltip
    title='Close sidebar'
    desc={`Ctrl${location === 'right' ? '+Shift' : ''}+\\`}
    coords={TooltipsCoordsHandler.closeSb(reference)}
    transX
  />
)

export default CloseSidebarTooltip
