import React from 'react'
import { useTheme } from 'styled-components'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import TasksListOptions from './Options/TasksListOptions'
import TasksListModalColors from './ColorsList'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/nodeRefHandler'
import ITheme from 'themes/theme.model'
import Container from './TasksListOptionsModal.styles'

const TasksListOptionsModal = () => {
  const { listId, color, hidden, template, invokerRect } = useTypedSelector(
    state => state.modals.tasksListOptions
  )
  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?
  const { closeTasksListsOptionsModal } = useActions()
  const theme = useTheme() as ITheme

  useOnCloseModal(ref, closeTasksListsOptionsModal)

  if (!template) return null

  return (
    <ModalWrapper>
      <Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        template={template}
        coords={coords}
      >
        <TasksListOptions hidden={hidden} color={color} template={template} />
        {color !== 'empty' && (
          <TasksListModalColors
            _id={listId}
            theme={theme}
            template={template}
            selectedColor={color}
          />
        )}
      </Container>
    </ModalWrapper>
  )
}

export default TasksListOptionsModal
