import React, { FormEvent, useEffect, useRef } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import FilledButton from 'components/ui/buttons/Filled'
import { EnterSvg } from 'components/ui/svg'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import {
  useCreateTasksListMutation,
  useUpdateTasksListMutation,
} from 'store/slices/tasksLists/tasksLists.api'
import AlreadyExistHandler from 'utils/AlreadyExistHandler'
import GetRandom from 'utils/GetRandom'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { TasksList } from 'models/tasksList/TasksList'
import * as Modal from './HandleTasksListTitleModal.styles'

const HandleTasksListTitleModal = () => {
  const { listId, title, dest, invokerRect } = useTypedSelector(
    state => state.modals.handleTasksList
  )
  const page = useTypedSelector(state => state.pages.page)
  const lists = useTypedSelector(state => state.tasksLists.tasksLists)
  const { isOpen } = useTypedSelector(state => state.alerts.alreadyExist)
  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?

  const inputRef = useRef<HTMLInputElement>(null)
  const { value, handleChangeValue } = useInput(title)
  const { closeHandleTasksListTitleModal, showAlreadyExistAlert } = useActions()

  const [createTasksList] = useCreateTasksListMutation()
  const [updateTasksList] = useUpdateTasksListMutation()

  const handleTasksListTitle = () => {
    if (dest === 'create' && page && value !== title) {
      if (!AlreadyExistHandler.handleCreate(value, lists)) {
        const color = GetRandom.listColor()!
        createTasksList({ ...TasksList.create(page._id, value, color) })
        closeHandleTasksListTitleModal()
      } else {
        showAlreadyExistAlert()
        inputRef.current?.blur()
      }
    } else {
      closeHandleTasksListTitleModal()
    }

    if (dest === 'edit' && value !== title) {
      if (!AlreadyExistHandler.handleEdit(value, listId, lists)) {
        updateTasksList({ _id: listId, body: { title: value } })
        closeHandleTasksListTitleModal()
      } else {
        showAlreadyExistAlert()
        inputRef.current?.blur()
      }
    } else {
      closeHandleTasksListTitleModal()
    }
  }

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    handleTasksListTitle()
  }

  useEffect(() => inputRef.current?.select(), [])

  useOnCloseModal(ref, !isOpen ? closeHandleTasksListTitleModal : null)

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
        <Modal.Form onSubmit={handleSubmitForm}>
          <Modal.Input
            type='text'
            ref={inputRef}
            value={value}
            onChange={handleChangeValue}
            placeholder={dest === 'create' ? 'New group' : 'Rename group'}
          />
          <FilledButton
            title='Done'
            EndSvg={EnterSvg}
            onClickAction={handleTasksListTitle}
          />
        </Modal.Form>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default HandleTasksListTitleModal
