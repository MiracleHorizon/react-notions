import React, { FC } from 'react'

import ChangeCoverOption from './Option/components/ChangeCover'
import RepositionOption from './Option/components/Reposition'
import PropTypes from './CoverOptionsPanel.types'
import * as Panel from './CoverOptionsPanel.styles'

const CoverOptionsPanel: FC<PropTypes> = ({
  _id,
  fullWidth,
  isHovering,
  ...reposition
}) => (
  <Panel.Wrapper fullWidth={fullWidth}>
    <Panel.Options isHovering={isHovering}>
      <ChangeCoverOption _id={_id} {...reposition} />
      <RepositionOption _id={_id} {...reposition} />
    </Panel.Options>
  </Panel.Wrapper>
)

export default CoverOptionsPanel
