import React, { FC, memo, useMemo } from 'react'

import Divider from 'components/ui/Divider - Checked'
import ModalTitle from 'components/ui/modals/ModalTitle'
import TasksListColorOption from 'components/ui/options/Color/TasksList'
import { TASKS_LIST_TITLE_COLORS } from 'utils/constants/colors'
import { Theme } from 'themes/theme.model'
import PropTypes from './TasksListModalColors.types'

const TasksListModalColors: FC<PropTypes> = memo(
  ({ _id, theme, template, activeColor, selectedItem, handleSelectItem }) => {
    const options = useMemo(() => Object.entries(TASKS_LIST_TITLE_COLORS), [])

    return (
      <>
        <Divider />
        <ModalTitle title='Colors' upCase={template === 'taskModal'} />
        {options.map(([key, value]) => (
          <TasksListColorOption
            key={value.title}
            _id={_id}
            reqColor={key}
            title={value.title}
            isActive={activeColor === key}
            isSelected={selectedItem === key}
            color={theme.identifier === Theme.LIGHT ? value.light : value.dark}
            handleSelectItem={handleSelectItem}
          />
        ))}
      </>
    )
  }
)

export default TasksListModalColors
