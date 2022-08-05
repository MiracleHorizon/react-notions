import React, { useRef } from 'react'
import { useTheme } from 'styled-components'

import ModalWrapper from 'components/ui/modals'
import TasksListOptions from './Options/TasksListOptions'
import TasksListModalColors from './ColorsList'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import { ITheme } from 'themes/theme.model'
import * as Modal from './TasksListOptionsModal.styles'

const TasksListOptionsModal = () => {
  const { listId, color, hidden, coords } = useTypedSelector(
    state => state.modals.tasksListsOptions
  )
  const { closeTasksListsOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const theme = useTheme() as ITheme

  useCloseModal(ref, closeTasksListsOptionsModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <TasksListOptions hidden={hidden} color={color} />
        {color !== 'empty' && (
          <TasksListModalColors
            _id={listId}
            theme={theme}
            selectedColor={color}
          />
        )}
      </Modal.Container>
    </ModalWrapper>
  )
}

export default TasksListOptionsModal
