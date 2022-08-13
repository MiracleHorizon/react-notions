import React, { FC } from 'react'

import { DotsSvg } from 'components/ui/svg'
import PropTypes from './OptionsButton.types'
import Container from './OptionsButton.styles'

const OptionsButton: FC<PropTypes> = ({ onClickAction, reference, ...styles }) => (
  <Container
    {...styles}
    data-btn='options'
    ref={reference}
    onClick={onClickAction}
    onContextMenu={onClickAction}
  >
    <DotsSvg />
  </Container>
)

export default OptionsButton
