import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import { DeleteTrashSvg } from 'components/ui/svg'
import { ItemProps } from '../OptionItem.types'

const DeleteOption: FC<ItemProps> = memo(
  ({ status, selectedItem, ...actions }) => (
    <OptionItem
      title='Delete'
      hotkeyTitle={status ? 'Del' : undefined}
      isSelected={selectedItem === 'Delete'}
      StartSvg={DeleteTrashSvg}
      {...actions}
    />
  )
)

export default DeleteOption
