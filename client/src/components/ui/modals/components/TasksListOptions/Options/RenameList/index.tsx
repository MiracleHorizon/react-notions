import React, { FC, FormEvent, memo } from 'react'

import OutlineInput from 'components/ui/inputs/Outline'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdateTasksListMutation } from 'services/tasksLists.api'
import { TasksListsSelector } from 'store/slices/tasksLists/tasksLists.selectors'
import * as Option from './RenameTasksListOption.styles'

const RenameTasksListOption: FC<{ _id: string }> = memo(({ _id }) => {
  const { closeTasksListsOptionsModal } = useActions()
  const list = useTypedSelector(s => TasksListsSelector.selectListById(s, _id))
  const { value: title, handleChangeValue } = useInput(list ? list.title : '')
  const [updateTasksList] = useUpdateTasksListMutation()

  const handleRenameList = (e: FormEvent) => {
    e.preventDefault()

    updateTasksList({ _id, body: { title } })
    closeTasksListsOptionsModal()
  }

  return (
    <Option.Container>
      <Option.Form onSubmit={handleRenameList}>
        <OutlineInput
          type='text'
          value={title}
          renderFocusable
          renderSelectable
          onChange={handleChangeValue}
        />
      </Option.Form>
    </Option.Container>
  )
})

export default RenameTasksListOption
