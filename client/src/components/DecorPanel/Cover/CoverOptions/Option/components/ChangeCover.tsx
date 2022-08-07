import React, { FC, useCallback, useRef } from 'react'

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

  const handleOpenCoverModal = () => {
    openChangeCoverModal({
      invokerRect: ref.current?.getBoundingClientRect().toJSON(),
      pageId: _id!,
    })
  }

  const handleSavePosition = () => {
    // updatePage({_id, })
    setReposition(false)
  }

  return (
    <Option.Container
      bRight
      pos='left'
      role='button'
      ref={!isRepositionEnabled ? ref : null}
      onClick={isRepositionEnabled ? handleSavePosition : handleOpenCoverModal}
    >
      <Option.Title>
        {isRepositionEnabled ? 'Save position' : 'Change cover'}
      </Option.Title>
    </Option.Container>
  )
}

export default ChangeCoverOption
