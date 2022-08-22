import React, { FC, memo } from 'react'

import { ISelectItemParams } from 'types'
import PropTypes from './EmptyPageItem.types'
import * as Item from './EmptyPageItem.styles'

const EmptyPageItem: FC<PropTypes & ISelectItemParams<string>> = memo(
  ({ title, StartSvg, onClickAction, isSelected, handleSelectItem }) => (
    <Item.Container
      isSelected={isSelected}
      onClick={() => onClickAction(title)}
      onMouseEnter={() => handleSelectItem(title)}
    >
      <StartSvg />
      <Item.Title>{title}</Item.Title>
    </Item.Container>
  )
)

export default EmptyPageItem
