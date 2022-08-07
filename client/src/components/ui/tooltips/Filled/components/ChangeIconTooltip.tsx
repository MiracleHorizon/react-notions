import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const ChangeIconTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Change icon'
    coords={tooltipsCoordsHandler.iconSb(reference)}
    transX
  />
)

export default ChangeIconTooltip
