import React, { FC, memo } from 'react'

import ChangeCoverOption from './Option/components/ChangeCover'
import RepositionOption from './Option/components/Reposition'
import PropTypes from './CoverOptionsPanel.types'
import * as Panel from './CoverOptionsPanel.styles'

const CoverOptionsPanel: FC<PropTypes> = memo(
  ({ _id, isHovering, ...reposition }) => (
    <Panel.Wrapper>
      <Panel.Options isHovering={isHovering}>
        <ChangeCoverOption _id={_id} {...reposition} />
        <RepositionOption {...reposition} />
      </Panel.Options>
    </Panel.Wrapper>
  )
)

export default CoverOptionsPanel
