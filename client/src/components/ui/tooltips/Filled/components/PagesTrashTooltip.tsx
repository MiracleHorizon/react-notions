import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const PagesTrashTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Restore deleted pages.'
    pos='rightCenter'
    invokerRef={reference}
  />
)

export default PagesTrashTooltip
