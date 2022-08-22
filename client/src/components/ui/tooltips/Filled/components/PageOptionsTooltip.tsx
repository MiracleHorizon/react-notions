import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const PageOptionsTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Remove, rename, and more...'
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default PageOptionsTooltip
