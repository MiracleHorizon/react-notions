import React, { memo, useRef } from 'react'

import PlusButton from 'components/ui/buttons/Plus'
import useActions from 'hooks/useActions'
import Container from './CreateTasksListBar.styles'

const CreateTasksListBar = memo(() => {
  const { openHandleTasksListTitleModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenCreateTasksListModal = () => {
    openHandleTasksListTitleModal({
      invokerRect: ref.current?.getBoundingClientRect().toJSON(),
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
