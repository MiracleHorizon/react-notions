import React, { FC } from 'react'

import PropTypes from '../CoverOption.types'
import * as Option from '../CoverOption.styles'

const RepositionOption: FC<PropTypes> = ({
  isRepositionEnabled,
  setReposition,
}) => {
  const handleStartReposition = () => setReposition(true)

  const handleCancelReposition = () => setReposition(false)

  return (
    <Option.Container
      pos='right'
      role='button'
      onClick={isRepositionEnabled ? handleCancelReposition : handleStartReposition}
    >
      <Option.Title>
        {isRepositionEnabled ? 'Cancel' : 'Reposition'}
      </Option.Title>
    </Option.Container>
  )
}

export default RepositionOption
