import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const AppSettingsTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Change theme, avatar, and more...'
    desc='Ctrl+O'
    pos='rightCenter'
    invokerRef={reference}
  />
)

export default AppSettingsTooltip
