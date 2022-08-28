import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import { LockedSvg, UnlockedSvg } from 'components/ui/svg'
import { ItemProps } from '../OptionItem.types'

const ToggleLockOption: FC<ItemProps> = memo(
  ({ locked, selectedItem, ...actions }) => (
    <OptionItem
      title={locked ? 'Unlock page' : 'Lock page'}
      isSelected={selectedItem === (locked ? 'Unlock page' : 'Lock page')}
      StartSvg={locked ? UnlockedSvg : LockedSvg}
      {...actions}
    />
  )
)

export default ToggleLockOption
