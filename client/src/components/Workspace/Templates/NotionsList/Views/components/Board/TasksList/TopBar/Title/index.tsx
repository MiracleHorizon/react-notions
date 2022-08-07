import React, { FC, useRef } from 'react'

import CountButton from 'components/ui/buttons/CountButton'
import NoStatusTasksListTitle from './NoStatus'
import useActions from 'hooks/useActions'
import PropTypes from './TasksListTitle.types'
import * as Title from './TasksListTitle.styles'

const TasksListTitle: FC<PropTypes> = ({ _id, title, color, totalTasks }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { openHandleTasksListTitleModal } = useActions()

  const handleOpenHandleListTitleModal = () => {
    openHandleTasksListTitleModal({
      invokerRect: ref.current?.getBoundingClientRect().toJSON(),
      listId: _id,
      dest: 'edit',
      title,
    })
  }

  return (
    <Title.Wrapper>
      {color === 'empty' ? (
        <NoStatusTasksListTitle />
      ) : (
        <Title.Container ref={ref} onClick={handleOpenHandleListTitleModal}>
          <Title.Content color={color}>
            <Title.Text>{title}</Title.Text>
          </Title.Content>
        </Title.Container>
      )}
      <CountButton count={totalTasks} />
    </Title.Wrapper>
  )
}

export default TasksListTitle
