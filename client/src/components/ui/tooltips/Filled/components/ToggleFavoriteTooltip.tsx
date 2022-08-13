import React, { FC } from 'react'
import FilledTooltip from '../index'
import { TDivRef } from 'types'

const ToggleFavoriteTooltip: FC<{ reference: TDivRef; favorite: boolean }> = ({
  reference,
  favorite,
}) => (
  <FilledTooltip
    title={`${
      favorite ? 'Remove this page from' : 'Pin this page in'
    } your favorites`}
    desc='Ctrl+Alt+Shift+F'
    pos='centerBottom'
    invokerRef={reference}
    itemsCenter
  />
)

export default ToggleFavoriteTooltip
