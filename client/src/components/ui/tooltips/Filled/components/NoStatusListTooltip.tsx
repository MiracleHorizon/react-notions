import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const NoStatusListTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Any items with an empty Status property will go here. This group cannot be removed.'
    coords={tooltipsCoordsHandler.noStatusList(reference)}
    trans
  />
)

export default NoStatusListTooltip
