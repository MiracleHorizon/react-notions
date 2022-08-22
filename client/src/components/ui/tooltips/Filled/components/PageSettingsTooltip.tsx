import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const PageSettingsTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Styles, delete, and more...'
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default PageSettingsTooltip
