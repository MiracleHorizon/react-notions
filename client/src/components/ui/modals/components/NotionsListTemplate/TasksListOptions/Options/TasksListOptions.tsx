import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import RenameTasksListOption from './RenameList'
import { DeleteTrashSvg, EyeHideSvg, EyeShowSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdateTasksListMutation } from 'services/tasksLists.api'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import PropTypes from './TasksListOptions.types'

const TasksListOptions: FC<PropTypes> = memo(
  ({ hidden, color, template, selectedItem, handleSelectItem }) => {
    const { listId } = useTypedSelector(s => s.modals.tasksListOptions)
    const [updateTasksList] = useUpdateTasksListMutation()
    const {
      closeTasksListsOptionsModal,
      closeHiddenTasksListModal,
      showDeleteTasksListAlert,
    } = useActions()

    const handleToggleHideList = () => {
      updateTasksList({ _id: listId, body: { hidden: !hidden } })
      closeTasksListsOptionsModal()
      closeHiddenTasksListModal()
    }

    const handleDeleteList = () => {
      showDeleteTasksListAlert(listId)
      closeTasksListsOptionsModal()
    }

    const handleSelectToggleShowOption = () => {
      handleSelectItem(hidden ? 'Show' : 'Hide')
    }

    const handleSelectDeleteOption = () => handleSelectItem('Delete')

    return (
      <>
        {template === 'taskModal' && <RenameTasksListOption _id={listId} />}
        {template === 'default' && (
          <OptionItem
            title={hidden ? 'Show' : 'Hide'}
            margY={color === TasksListTitleColorsEnum.EMPTY}
            isSelected={selectedItem === (hidden ? 'Show' : 'Hide')}
            StartSvg={hidden ? EyeShowSvg : EyeHideSvg}
            onClickAction={handleToggleHideList}
            onMouseOverAction={handleSelectToggleShowOption}
          />
        )}
        {color !== TasksListTitleColorsEnum.EMPTY && (
          <OptionItem
            title='Delete'
            isSelected={selectedItem === 'Delete'}
            StartSvg={DeleteTrashSvg}
            onClickAction={handleDeleteList}
            onMouseOverAction={handleSelectDeleteOption}
          />
        )}
      </>
    )
  }
)

export default TasksListOptions
