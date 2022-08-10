import React, { FC } from 'react'

import PropTypes from './EmptyPageItem.types'
import * as Item from './EmptyPageItem.styles'

const EmptyPageItem: FC<PropTypes> = ({ title, StartSvg, onClickAction }) => (
  <Item.Container onClick={() => onClickAction(title)}>
    <StartSvg />
    <Item.Title>{title}</Item.Title>
  </Item.Container>
)

export default EmptyPageItem
