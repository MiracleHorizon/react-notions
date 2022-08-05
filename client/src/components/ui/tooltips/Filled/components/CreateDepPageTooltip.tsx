import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const CreateDepPageTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Quickly add a page inside'
    coords={tooltipsCoordsHandler.createDepPage(reference)}
    trans
  />
)

export default CreateDepPageTooltip
