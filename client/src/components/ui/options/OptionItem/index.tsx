import React, { FC, memo } from 'react'
import PropTypes from './OptionItem.types'
import * as Option from './OptionItem.styles'

const OptionItem: FC<PropTypes> = memo(
  ({
    title,
    margY,
    reference,
    isSelected,
    hotkeyTitle,
    StartSvg,
    EndSvg,
    onClickAction,
    onMouseOverAction,
    handleSelectItem,
  }) => {
    const handleMouseOver = () => {
      if (onMouseOverAction) return onMouseOverAction()
      if (handleSelectItem) return handleSelectItem(title)
    }

    return (
      <Option.Container
        data-el='option-item'
        margY={margY}
        ref={reference}
        onClick={onClickAction}
        onMouseOver={handleMouseOver}
        isSelected={isSelected}
      >
        <StartSvg />
        <Option.Title>{title}</Option.Title>
        {EndSvg && <EndSvg />}
        {hotkeyTitle && <Option.HotKeyTitle>{hotkeyTitle}</Option.HotKeyTitle>}
      </Option.Container>
    )
  }
)

export default OptionItem
