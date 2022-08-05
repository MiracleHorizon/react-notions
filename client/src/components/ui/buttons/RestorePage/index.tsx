import React, { FC, memo } from 'react'

import { UndoSvg } from 'components/ui/svg'
import Container from './RestorePageButton.styles'

const RestorePageButton: FC<{ _id: string }> = memo(({ _id }) => {
  const handleRestorePage = () => {
    // restorePage(_id)
  }

  return (
    <Container onClick={handleRestorePage}>
      <UndoSvg />
    </Container>
  )
})

export default RestorePageButton
