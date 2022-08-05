import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { TooltipsCoordsHandler } from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

// В приложении этот tooltip используется только для левого sidebar,
// поэтому гибкие пропсы для определения локации, etc sidebar не используются.

const OpenSidebarTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Lock sidebar open'
    desc='Ctrl+\\'
    coords={TooltipsCoordsHandler.openSb(reference)}
  />
)

export default OpenSidebarTooltip
