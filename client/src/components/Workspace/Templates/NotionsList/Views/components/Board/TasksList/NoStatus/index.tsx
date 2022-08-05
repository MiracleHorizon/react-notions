import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import BoardItem from '../Item'
import TasksListTopBar from '../TopBar'
import CreateNoStatusTaskBar from './CreateNoStatusTaskBar'
import { selectNoStatusList } from 'store/slices/tasksLists'
import { selectNoStatusPages } from 'store/slices/pages/pages.selectors'
import PropTypes from './NoStatusTasksList.types'
import * as List from '../TasksList.styles'

const NoStatusTasksList: FC<PropTypes> = memo(
  ({ isHovering, handleListHovering }) => {
    const list = useSelector(selectNoStatusList)
    const tasks = useSelector(selectNoStatusPages)

    return (
      <>
        {list && (
          <List.Wrapper onMouseEnter={() => handleListHovering('NO_STATUS')}>
            <TasksListTopBar
              isHovering={isHovering}
              totalTasks={tasks.length}
              {...list}
            />
            <List.Content>
              {tasks.map(task => (
                <BoardItem key={task._id} {...task} />
              ))}
              <CreateNoStatusTaskBar />
            </List.Content>
          </List.Wrapper>
        )}
      </>
    )
  }
)

export default NoStatusTasksList
