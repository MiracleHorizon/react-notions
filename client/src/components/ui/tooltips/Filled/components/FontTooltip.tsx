import React, { FC } from 'react'

import FilledTooltip from '../index'
import handleFontTooltipTitle from 'utils/helpers/handleFontTooltipTitle'
import { TPageFont } from 'models/decor/fonts'
import { TDivRef } from 'types'

const FontTooltip: FC<{ reference: TDivRef; font: TPageFont }> = ({
  reference,
  font,
}) => (
  <FilledTooltip
    title={handleFontTooltipTitle(font)}
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default FontTooltip
