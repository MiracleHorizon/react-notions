import React, { FC } from 'react'

import { TriangleSvg } from 'components/ui/svg'
import PropTypes from './ToggleButton.types'
import Container from './ToggleButton.styles'

const ToggleButton: FC<PropTypes> = ({ expanded, handleToggleExpanded }) => (
  <Container role='button' data-btn='toggle' onClick={handleToggleExpanded}>
    <TriangleSvg isOpen={expanded} />
  </Container>
)

export default ToggleButton
