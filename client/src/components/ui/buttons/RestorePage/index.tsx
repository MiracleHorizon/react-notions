import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { UndoSvg } from 'components/ui/svg'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { useRestorePageMutation } from 'services/notions.api'
import { ModalPosition } from 'hooks/useSetModalPosition'
import Container from './RestorePageButton.styles'

const RestorePageButton: FC<{ _id: string }> = ({ _id }) => {
  const [restorePage] = useRestorePageMutation()
  const { ref, isHovering } = useDebounceHovering()

  const handleRestorePage = () => restorePage(_id)

  return (
    <Container
      ref={ref}
      role='button'
      data-btn='restore'
      onClick={handleRestorePage}
    >
      <UndoSvg />
      {isHovering && (
        <FilledTooltip title='Restore' pos={ModalPosition.CENTER_BOTTOM} invokerRef={ref} />
      )}
    </Container>
  )
}

export default RestorePageButton
