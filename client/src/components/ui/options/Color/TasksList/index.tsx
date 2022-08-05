import React, { FC } from 'react'

import { ThinCheckSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdateTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'
import PropTypes from './TasksListColorOption.types'
import * as Option from './TasksListColorOption.styles'

const TasksListColorOption: FC<PropTypes> = ({
  _id,
  color,
  title,
  reqColor,
  isSelected,
}) => {
  const { setTasksListsOptionsModalColor } = useActions()
  const [updateTasksList] = useUpdateTasksListMutation()

  const handleSelectColor = async () => {
    await updateTasksList({ _id, body: { color: reqColor } })
    setTasksListsOptionsModalColor(reqColor)
  }

  return (
    <Option.Wrapper onClick={handleSelectColor}>
      <Option.Container color={color} />
      <Option.Title>{title}</Option.Title>
      {isSelected && <ThinCheckSvg />}
    </Option.Wrapper>
  )
}

export default TasksListColorOption
