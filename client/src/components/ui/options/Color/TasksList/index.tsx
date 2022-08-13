import React, { FC, memo } from 'react'

import { ThinCheckSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdateTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'
import PropTypes from './TasksListColorOption.types'
import * as Option from './TasksListColorOption.styles'

const TasksListColorOption: FC<PropTypes> = memo(
  ({ _id, color, title, reqColor, isActive, isSelected, handleSelectItem }) => {
    const { setTasksListsOptionsModalColor } = useActions()
    const [updateTasksList] = useUpdateTasksListMutation()

    const handleSelectColor = async () => {
      await updateTasksList({ _id, body: { color: reqColor } })
      setTasksListsOptionsModalColor(reqColor)
    }

    return (
      <Option.Wrapper
        isSelected={isSelected}
        onClick={handleSelectColor}
        onMouseEnter={() => handleSelectItem(reqColor)}
      >
        <Option.Container color={color} />
        <Option.Title>{title}</Option.Title>
        {isActive && <ThinCheckSvg />}
      </Option.Wrapper>
    )
  }
)

export default TasksListColorOption
