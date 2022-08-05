import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const PagesTrashTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Restore deleted pages.'
    coords={tooltipsCoordsHandler.pagesTrash(reference)}
  />
)

export default PagesTrashTooltip
