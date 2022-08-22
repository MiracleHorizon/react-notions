import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const RestorePageTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip title='Restore' pos='centerBottom' invokerRef={reference} />
)

export default RestorePageTooltip
