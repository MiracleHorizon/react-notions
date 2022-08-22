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
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import ITheme from 'themes/theme.model'
import Container from './TasksListOptionsModal.styles'

const TasksListOptionsModal = () => {
  const { closeTasksListsOptionsModal } = useActions()
  const { listId, color, hidden, template, invokerRect } = useTypedSelector(
    s => s.modals.tasksListOptions
  )
  const { selectedItem, handleSelectItem } = useSelectItem(color)
  const theme = useTheme() as ITheme

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  })

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
        {color !== TasksListTitleColorsEnum.EMPTY && (
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
}

export default TasksListOptionsModal
