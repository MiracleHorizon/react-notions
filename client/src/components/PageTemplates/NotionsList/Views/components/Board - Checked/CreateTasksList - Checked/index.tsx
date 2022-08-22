import React, { useRef } from 'react'

import PlusButton from 'components/ui/buttons/Plus'
import useActions from 'hooks/useActions'
import Container from './CreateTasksListBar.styles'

const CreateTasksListBar = () => {
  const { openHandleTasksListTitleModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenCreateTasksListModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openHandleTasksListTitleModal({ invokerRect, dest: 'create' })
  }

  return (
    <Container ref={ref} onClick={handleOpenCreateTasksListModal}>
      <PlusButton />
    </Container>
  )
}

export default CreateTasksListBar
