import React, { FC, memo } from 'react'

import OptionItem from '../index'
import Divider from 'components/ui/Divider'
import { MoveToSvg } from 'components/ui/svg'
import { ItemProps } from '../OptionItem.types'

const MovePageOption: FC<ItemProps> = memo(
  ({ locked, selectedItem, ...actions }) => (
    <>
      {!locked && <Divider />}
      <OptionItem
        title='Move to'
        hotkeyTitle='Ctrl+Shift+P'
        isSelected={selectedItem === 'Move to'}
        StartSvg={MoveToSvg}
        {...actions}
      />
    </>
  )
)

export default MovePageOption
