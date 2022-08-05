import React, { FC } from 'react'
import PropTypes from './OptionItem.types'
import * as Option from './OptionItem.styles'

const OptionItem: FC<PropTypes> = ({
  StartSvg,
  title,
  onClickAction,
  reference,
  margY
}) => (
  <Option.Container
    data-el='option-item'
    margY={margY}
    ref={reference}
    onClick={onClickAction}
  >
    <StartSvg />
    <Option.Title>{title}</Option.Title>
  </Option.Container>
)
export default OptionItem
