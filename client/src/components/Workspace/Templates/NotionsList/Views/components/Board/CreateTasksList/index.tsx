import React, { memo, useRef } from 'react'

import PlusButton from 'components/ui/buttons/Plus'
import useActions from 'hooks/useActions'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import Container from './CreateTasksListBar.styles'

const CreateTasksListBar = memo(() => {
  const { openHandleTasksListTitleModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenCreateTasksListModal = () => {
    openHandleTasksListTitleModal({
      coords: modalsCoordsHandler.handleTasksListTitle(ref),
      dest: 'create',
    })
  }

  return (
    <Container ref={ref} onClick={handleOpenCreateTasksListModal}>
      <PlusButton />
    </Container>
  )
})

export default CreateTasksListBar
