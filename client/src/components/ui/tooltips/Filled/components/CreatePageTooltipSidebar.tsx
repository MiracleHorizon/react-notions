import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled'
import { TDivRef } from 'types'

const CreatePageTooltipSidebar: FC<{ reference: TDivRef }> = ({
  reference,
}) => (
  <FilledTooltip
    title='Add a page'
    desc='Here your regular pages.'
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default CreatePageTooltipSidebar
