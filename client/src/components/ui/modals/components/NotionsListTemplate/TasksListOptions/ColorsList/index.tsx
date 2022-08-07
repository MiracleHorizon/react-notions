import React, { FC } from 'react'

import Divider from 'components/ui/Divider'
import ModalTitle from 'components/ui/modals/ModalTitle'
import TasksListColorOption from 'components/ui/options/Color/TasksList'
import { tasksListTitleColors } from 'models/decor/colors'
import { Theme } from 'themes/theme.model'
import PropTypes from './TasksListModalColors.types'

const TasksListModalColors: FC<PropTypes> = ({
  _id,
  selectedColor,
  theme,
  template,
}) => (
  <>
    <Divider />
    <ModalTitle title='Colors' upCase={template === 'taskModal'} />
    {Object.entries(tasksListTitleColors).map(([key, value]) => (
      <TasksListColorOption
        key={value.title}
        _id={_id}
        reqColor={key}
        title={value.title}
        isSelected={selectedColor === key}
        color={theme.identifier === Theme.LIGHT ? value.light : value.dark}
      />
    ))}
  </>
)

export default TasksListModalColors
