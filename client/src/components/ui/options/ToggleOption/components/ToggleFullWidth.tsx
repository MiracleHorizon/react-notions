import React, { FC, memo } from 'react'

import ToggleOptionButton from 'components/ui/buttons/ToggleOption'
import { ToggleFullWidthProps } from '../ToggleOption.types'
import * as Option from '../ToggleOption.styles'

const ToggleFullWidthOption: FC<ToggleFullWidthProps> = memo(
  ({ fullWidth, selectedItem, handleSelectItem, handleToggleFullWidth }) => (
    <Option.Container
      isSelected={selectedItem === 'Full width'}
      onClick={handleToggleFullWidth}
      onMouseEnter={() => handleSelectItem('Full width')}
    >
      <Option.Title>Full width</Option.Title>
      <ToggleOptionButton isActive={fullWidth} />
    </Option.Container>
  )
)

export default ToggleFullWidthOption
