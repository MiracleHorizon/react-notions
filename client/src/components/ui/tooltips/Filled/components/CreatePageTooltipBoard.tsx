import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const CreatePageTooltipBoard: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Create new page'
    coords={tooltipsCoordsHandler.createPageBoard(reference)}
    trans
  />
)

export default CreatePageTooltipBoard
