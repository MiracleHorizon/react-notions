import React, { FC } from 'react'

import { DotsSvg } from 'components/ui/svg'
import PropTypes from './OptionsButton.types'
import Container from './OptionsButton.styles'

const OptionsButton: FC<PropTypes> = ({ onClickAction, ...styles }) => (
  <Container
    {...styles}
    data-btn='options'
    onClick={onClickAction}
    onContextMenu={onClickAction}
  >
    <DotsSvg />
  </Container>
)

export default OptionsButton
