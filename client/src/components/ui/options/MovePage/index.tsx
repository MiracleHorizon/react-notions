import React, { FC } from 'react'

import OptionItem from '../OptionItem'
import Divider from 'components/ui/Divider'
import { MoveToSvg } from 'components/ui/svg'
import { IVoidClick } from 'types'

const MovePageOption: FC<IVoidClick> = ({ onClickAction }) => (
  <>
    <Divider />
    <OptionItem
      title='Move to'
      StartSvg={MoveToSvg}
      onClickAction={onClickAction}
    />
  </>
)

export default MovePageOption
