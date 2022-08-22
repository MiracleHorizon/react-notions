import React, { FC } from 'react'

import ChangeCoverOption from './Option - Checked/components/ChangeCover'
import RepositionOption from './Option - Checked/components/Reposition'
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
      <RepositionOption {...reposition} />
    </Panel.Options>
  </Panel.Wrapper>
)

export default CoverOptionsPanel
