import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import { RenameSvg } from 'components/ui/svg'
import { ItemProps } from '../OptionItem.types'

const RenameOption: FC<ItemProps> = memo(
  ({  selectedItem, ...params }) => (
    <OptionItem
      title='Rename'
      hotkeyTitle='Ctrl+Shift+R'
      isSelected={selectedItem === 'Rename'}
      StartSvg={RenameSvg}
      {...params}
    />
  )
)

export default RenameOption
