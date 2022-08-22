import React, { FC, useRef } from 'react'

import useActions from 'hooks/useActions'
import PropTypes from '../CoverOption.types'
import * as Option from '../CoverOption.styles'

const ChangeCoverOption: FC<PropTypes> = ({
  _id,
  setReposition,
  isRepositionEnabled,
}) => {
  const { openChangeCoverModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenChangeCoverModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openChangeCoverModal({ invokerRect, pageId: _id! })
  }

  const handleSavePosition = () => setReposition(false)

  return (
    <Option.Container
      bRight
      pos='left'
      role='button'
      ref={!isRepositionEnabled ? ref : null}
      onClick={isRepositionEnabled ? handleSavePosition : handleOpenChangeCoverModal}
    >
      <Option.Title>
        {isRepositionEnabled ? 'Save position' : 'Change cover'}
      </Option.Title>
    </Option.Container>
  )
}

export default ChangeCoverOption
