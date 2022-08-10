import React, { FC } from 'react'
import PropTypes from './OptionItem.types'
import * as Option from './OptionItem.styles'

const OptionItem: FC<PropTypes> = ({
  StartSvg,
  EndSvg,
  title,
  onClickAction,
  onMouseOverAction,
  reference,
  margY,
}) => (
  <Option.Container
    data-el='option-item'
    margY={margY}
    ref={reference}
    onClick={onClickAction}
    onMouseOver={onMouseOverAction}
  >
    <StartSvg />
    <Option.Title>{title}</Option.Title>
    {EndSvg && <EndSvg />}
  </Option.Container>
)

export default OptionItem
