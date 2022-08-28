import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import { AliasSvg } from 'components/ui/svg'
import { ItemProps } from '../OptionItem.types'

const OpenInNewTabOption: FC<ItemProps> = memo(
  ({ selectedItem, ...actions }) => (
    <OptionItem
      title='Open in new tab'
      hotkeyTitle='Ctrl+Shit+↵'
      isSelected={selectedItem === 'Open in new tab'}
      StartSvg={AliasSvg}
      {...actions}
    />
  )
)

export default OpenInNewTabOption
