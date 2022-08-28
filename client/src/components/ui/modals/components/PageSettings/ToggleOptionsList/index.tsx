import React, { FC, memo } from 'react'

import {
  ToggleSmallTextOption,
  ToggleFullWidthOption,
} from 'components/ui/options/ToggleOption'
import Divider from 'components/ui/Divider'
import PropTypes from './ToggleOptionsList.types'

const ToggleOptionsList: FC<PropTypes> = memo(
  ({
    page: { smallText, fullWidth },
    handleToggleFullWidth,
    handleToggleSmallText,
    ...selectedItemState
  }) => (
    <>
      <Divider />
      <ToggleSmallTextOption
        {...selectedItemState}
        smallText={smallText}
        handleToggleSmallText={handleToggleSmallText}
      />
      <ToggleFullWidthOption
        {...selectedItemState}
        fullWidth={fullWidth}
        handleToggleFullWidth={handleToggleFullWidth}
      />
      <Divider />
    </>
  )
)

export default ToggleOptionsList
