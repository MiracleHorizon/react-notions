import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const CreatePageTooltipBoard: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Create new page'
    pos='centerTop'
    invokerRef={reference}
  />
)

export default CreatePageTooltipBoard
