import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const AppSettingsTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Change theme, avatar, and more...'
    desc='Ctrl+O'
    coords={tooltipsCoordsHandler.sidebarOption(reference)}
    transY
  />
)

export default AppSettingsTooltip
