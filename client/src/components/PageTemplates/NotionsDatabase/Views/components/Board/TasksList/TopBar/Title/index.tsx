import React, { FC, memo, useRef } from 'react'

import CountButton from 'components/ui/buttons/CountButton'
import NoStatusTasksListTitle from './NoStatus'
import useActions from 'hooks/useActions'
import PropTypes from './TasksListTitle.types'
import * as Title from './TasksListTitle.styles'

const TasksListTitle: FC<PropTypes> = memo(
  ({ _id, title, color, hidden, totalTasks, pageLocked }) => {
    const { openHandleTasksListTitleModal } = useActions()
    const ref = useRef<HTMLDivElement>(null)

    const handleOpenHandleListTitleModal = () => {
      const invokerRect = ref.current?.getBoundingClientRect().toJSON()
      openHandleTasksListTitleModal({
        invokerRect,
        listId: _id,
        dest: 'edit',
        title,
      })
    }

    return (
      <Title.Wrapper pageLocked={pageLocked}>
        {color === 'empty' ? (
          <NoStatusTasksListTitle hidden={hidden} />
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
)

export default TasksListTitle
