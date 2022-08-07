import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const CreatePageTooltipSidebar: FC<{ reference: TDivRef }> = ({
  reference,
}) => (
  <FilledTooltip
    title='Add a page'
    desc='Here your regular pages.'
    coords={tooltipsCoordsHandler.createPageSb(reference)}
    transX
  />
)

export default CreatePageTooltipSidebar
