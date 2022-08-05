import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'

const PagesListTitleTooltip: FC<{
  title: string
  isOpen: boolean
  reference: TDivRef
}> = ({ title, isOpen, reference }) => (
  <FilledTooltip
    title={`Click to ${isOpen ? 'hide' : 'show'} section`}
    desc={
      title === 'Common'
        ? 'Here your regular pages.'
        : 'Pages you have favorite.'
    }
    coords={tooltipsCoordsHandler.pagesListTitle(reference)}
  />
)

export default PagesListTitleTooltip
