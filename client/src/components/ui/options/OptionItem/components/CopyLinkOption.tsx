import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import { LinkSvg } from 'components/ui/svg'
import { ItemProps } from '../OptionItem.types'

const CopyLinkOption: FC<ItemProps> = memo(({ selectedItem, ...actions }) => (
  <OptionItem
    title='Copy link'
    isSelected={selectedItem === 'Copy link'}
    StartSvg={LinkSvg}
    {...actions}
  />
))

export default CopyLinkOption
