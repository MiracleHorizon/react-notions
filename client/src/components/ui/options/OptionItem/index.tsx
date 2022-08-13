import React, { FC, memo } from 'react'
import PropTypes from './OptionItem.types'
import * as Option from './OptionItem.styles'

const OptionItem: FC<PropTypes> = memo(
  ({
    title,
    margY,
    reference,
    isSelected,
    StartSvg,
    EndSvg,
    onClickAction,
    onMouseOverAction,
  }) => (
    <Option.Container
      data-el='option-item'
      margY={margY}
      ref={reference}
      onClick={onClickAction}
      onMouseOver={onMouseOverAction}
      isSelected={isSelected}
    >
      <StartSvg />
      <Option.Title>{title}</Option.Title>
      {EndSvg && <EndSvg />}
    </Option.Container>
  )
)

export default OptionItem
