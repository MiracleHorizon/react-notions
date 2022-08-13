import React, { memo } from 'react'
import { useTheme } from 'styled-components'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import TasksListOptions from './Options/TasksListOptions'
import TasksListModalColors from './ColorsList'
import useActions from 'hooks/useActions'
import useSelectItem from 'hooks/useSelectItem'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import ITheme from 'themes/theme.model'
import Container from './TasksListOptionsModal.styles'

const TasksListOptionsModal = memo(() => {
  const { listId, color, hidden, template, invokerRect } = useTypedSelector(
    state => state.modals.tasksListOptions
  )
  const { selectedItem, handleSelectItem } = useSelectItem(color)
  const { closeTasksListsOptionsModal } = useActions()
  const theme = useTheme() as ITheme

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?

  useOnCloseModal(ref, closeTasksListsOptionsModal)

  if (!template) return null

  return (
    <ModalWrapper>
      <Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        template={template}
        coords={coords}
      >
        <TasksListOptions
          color={color}
          hidden={hidden}
          template={template}
          selectedItem={selectedItem}
          handleSelectItem={handleSelectItem}
        />
        {color !== 'empty' && (
          <TasksListModalColors
            _id={listId}
            theme={theme}
            template={template}
            activeColor={color}
            selectedItem={selectedItem}
            handleSelectItem={handleSelectItem}
          />
        )}
      </Container>
    </ModalWrapper>
  )
})

export default TasksListOptionsModal
