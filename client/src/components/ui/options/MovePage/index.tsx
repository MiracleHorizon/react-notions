import React, { memo } from 'react'

import OptionItem from '../OptionItem'
import Divider from 'components/ui/Divider - Checked'
import { MoveToSvg } from 'components/ui/svg'
import { IVoidClick } from 'types'

const MovePageOption = memo(({ onClickAction }: IVoidClick) => (
  <>
    <Divider />
    <OptionItem
      title='Move to'
      StartSvg={MoveToSvg}
      onClickAction={onClickAction}
    />
  </>
))

export default MovePageOption
