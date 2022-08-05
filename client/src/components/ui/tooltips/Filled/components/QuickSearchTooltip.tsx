import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const QuickSearchTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Search and quickly jump to a page'
    desc='Ctrl+P'
    coords={tooltipsCoordsHandler.sidebarOption(reference)}
    transY
  />
)

export default QuickSearchTooltip
