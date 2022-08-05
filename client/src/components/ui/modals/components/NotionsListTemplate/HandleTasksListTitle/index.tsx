import React, { FormEvent, useEffect, useRef } from 'react'

import ModalWrapper from 'components/ui/modals'
import FilledButton from 'components/ui/buttons/Filled'
import { EnterSvg } from 'components/ui/svg'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import {
  useCreateTasksListMutation,
  useUpdateTasksListMutation,
} from 'store/slices/tasksLists/tasksLists.api'
import AlreadyExistHandler from 'helpers/handleAlreadyExist'
import getRandomListColor from 'helpers/getRandomListColor'
import { TasksList } from 'models/tasksList/TasksList'
import * as Modal from './HandleTasksListTitleModal.styles'

const HandleTasksListTitleModal = () => {
  const { listId, title, dest, coords } = useTypedSelector(
    state => state.modals.handleTasksList
  )
  const page = useTypedSelector(state => state.pages.page)
  const lists = useTypedSelector(state => state.tasksLists.tasksLists)
  const { isOpen } = useTypedSelector(state => state.alerts.alreadyExist)

  const { value, handleChangeValue } = useInput(title)
  const { closeHandleTasksListTitleModal, showAlreadyExistAlert } = useActions()

  const [createTasksList] = useCreateTasksListMutation()
  const [updateTasksList] = useUpdateTasksListMutation()

  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTasksListTitle = () => {
    if (dest === 'create' && page && value !== title) {
      if (!AlreadyExistHandler.create(value, lists)) {
        const color = getRandomListColor()!
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
      if (!AlreadyExistHandler.edit(value, listId, lists)) {
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

  useCloseModal(ref, !isOpen ? closeHandleTasksListTitleModal : null)

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
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
