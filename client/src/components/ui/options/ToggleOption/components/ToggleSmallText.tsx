import React, { FC, memo } from 'react'

import ToggleOptionButton from 'components/ui/buttons/ToggleOption'
import { ToggleSmallTextProps } from '../ToggleOption.types'
import * as Option from '../ToggleOption.styles'

const ToggleSmallTextOption: FC<ToggleSmallTextProps> = memo(
  ({ smallText, selectedItem, handleSelectItem, handleToggleSmallText }) => (
    <Option.Container
      isSelected={selectedItem === 'Small text'}
      onClick={handleToggleSmallText}
      onMouseEnter={() => handleSelectItem('Small text')}
    >
      <Option.Title>Small text</Option.Title>
      <ToggleOptionButton isActive={smallText} />
    </Option.Container>
  )
)

export default ToggleSmallTextOption
