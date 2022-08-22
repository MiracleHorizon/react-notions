import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const PermanentlyDeletePageTooltip: FC<{ reference: TDivRef }> = ({
  reference,
}) => (
  <FilledTooltip
    title='Delete permanently'
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default PermanentlyDeletePageTooltip
