import React, { useMemo, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import ModalWrapper from 'components/ui/modals'
import TasksListOptions from './Options/TasksListOptions'
import TasksListModalColors from './ColorsList'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import ModalsCoordsHandler from 'utils/coordsHandlers/modalCoordsHandler'
import ITheme from 'themes/theme.model'
import Container from './TasksListOptionsModal.styles'
import modalCoordsHandler from 'utils/coordsHandlers/modalCoordsHandler'

const TasksListOptionsModal = () => {
  const { listId, color, hidden, template, invokerRect } = useTypedSelector(
    state => state.modals.tasksListOptions
  )
  const { closeTasksListsOptionsModal } = useActions()
  const theme = useTheme() as ITheme

  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)
  const coords = useMemo(() => {
    return modalCoordsHandler(rect.current, invokerRect).centerBottom
  }, [rect.current, invokerRect])

  useOnCloseModal(ref, closeTasksListsOptionsModal)

  if (!template) return null

  return (
    <ModalWrapper>
      <Container
        ref={node => {
          if (node !== null) {
            setRef(node)
            rect.current = node.getBoundingClientRect()
          }
        }}
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
