import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import RenameTasksListOption from './RenameList'
import { DeleteTrashSvg, EyeHideSvg, EyeShowSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdateTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'
import PropTypes from './TasksListOptions.types'

const TasksListOptions: FC<PropTypes> = memo(
  ({ hidden, color, template, selectedItem, handleSelectItem }) => {
    const { listId } = useTypedSelector(state => state.modals.tasksListOptions)
    const [updateTasksList] = useUpdateTasksListMutation()
    const {
      closeTasksListsOptionsModal,
      closeHiddenTasksListModal,
      showDeleteTasksListAlert,
    } = useActions()

    const handleToggleHideList = async () => {
      await updateTasksList({ _id: listId, body: { hidden: !hidden } })
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
            margY={color === 'empty'}
            isSelected={selectedItem === (hidden ? 'Show' : 'Hide')}
            StartSvg={hidden ? EyeShowSvg : EyeHideSvg}
            onClickAction={handleToggleHideList}
            onMouseOverAction={handleSelectToggleShowOption}
          />
        )}
        {color !== 'empty' && (
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
