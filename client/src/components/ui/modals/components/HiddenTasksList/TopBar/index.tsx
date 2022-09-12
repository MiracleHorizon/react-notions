import React, { FC, memo } from 'react'

import Container from './HiddenTasksListModalTopBar.styles'
import TasksListTopBar from 'components/PageTemplates/NotionsDatabase/Views/components/Board/TasksList/TopBar'
import OutlineInput from 'components/ui/inputs/Outline'
import useTypedSelector from 'hooks/useTypedSelector'
import PropTypes from './HiddenTasksListModalTopBar.types'

const HiddenTasksListModalTopBar: FC<PropTypes> = memo(
  ({
    list,
    totalTasks,
    handleStartTaskCreating,
    value,
    handleChangeValue,
    handleClearValue,
  }) => (
    <Container>
      <TasksListTopBar
        {...list}
        isHovering={true}
        totalTasks={totalTasks}
        pageLocked={useTypedSelector(s => s.notions.page).locked}
        onClickAction={handleStartTaskCreating}
      />
      <OutlineInput
        renderFocusable
        type='text'
        placeholder='Search for a page...'
        value={value}
        onChange={handleChangeValue}
        onClear={handleClearValue}
      />
    </Container>
  )
)

export default HiddenTasksListModalTopBar
