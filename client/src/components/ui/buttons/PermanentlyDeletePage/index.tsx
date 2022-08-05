import React, { FC, memo } from 'react'

import { DeleteTrashSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import Container from './PermanentlyDeletePageButton.styles'

const PermanentlyDeletePageButton: FC<{ _id: string }> = memo(({ _id }) => {
  const { showDeletePageAlert } = useActions()

  const handleOpenDeletePageAlert = () => showDeletePageAlert(_id)

  return (
    <Container onClick={handleOpenDeletePageAlert}>
      <DeleteTrashSvg />
    </Container>
  )
})

export default PermanentlyDeletePageButton
