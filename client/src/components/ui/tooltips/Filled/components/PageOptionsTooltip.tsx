import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const PageOptionsTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Remove, rename, and more...'
    coords={tooltipsCoordsHandler.pageOptions(reference)}
    trans
  />
)

export default PageOptionsTooltip
