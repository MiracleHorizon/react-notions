import React, { FC } from 'react'
import FilledTooltip from 'components/ui/tooltips/Filled/index'
import { TDivRef } from 'types'

const CreateDepPageTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <FilledTooltip
    title='Quickly add a page inside'
    pos='centerBottom'
    invokerRef={reference}
  />
)

export default CreateDepPageTooltip
