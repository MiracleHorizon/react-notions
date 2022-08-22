import React, { FC, memo } from 'react'

import { TriangleSvg } from 'components/ui/svg'
import PropTypes from './ToggleButton.types'
import Button from './ToggleButton.styles'

const ToggleButton: FC<PropTypes> = memo(
  ({ expanded, handleToggleExpanded }) => (
    <Button role='button' data-btn='toggle' onClick={handleToggleExpanded}>
      <TriangleSvg isOpen={expanded} />
    </Button>
  )
)

export default ToggleButton
