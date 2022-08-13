import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled'
import { TDivRef } from 'types'

const OpenFullPageTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Open in full page'
    desc='Ctrl+↵'
    pos='centerTop'
    invokerRef={reference}
  />
)

export default OpenFullPageTooltip
