import React, { FC } from 'react'

import { LockedFilledSvg, UnlockedFilledSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'services/notions.api'
import PropTypes from './ToggleLockedButton.types'
import * as Button from './ToggleLockedButton.styles'

const ToggleLockedButton: FC<PropTypes> = ({
  _id,
  locked,
  reLock,
  setReLock,
}) => {
  const [updatePage] = useUpdatePageMutation()

  const handleToggleLock = () => {
    updatePage({ _id, body: { locked: !locked } })
    setReLock(!reLock)
  }

  return (
    <Button.Container
      role='button'
      data-btn='toggle-locked'
      locked={locked}
      reLock={reLock}
      onClick={handleToggleLock}
    >
      {locked ? <LockedFilledSvg /> : <UnlockedFilledSvg />}
      <Button.Title>{reLock ? 'Re-lock' : 'Locked'}</Button.Title>
    </Button.Container>
  )
}

export default ToggleLockedButton
