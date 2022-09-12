import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import TasksListOptions from './Options/TasksListOptions'
import TasksListModalColors from './ColorsList'
import useActions from 'hooks/useActions'
import useSelectItem from 'hooks/useSelectItem'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import ITheme from 'themes/theme.model'
import Container from './TasksListOptionsModal.styles'
import { TASKS_LIST_TITLE_COLORS } from 'utils/constants/colors'

const TasksListOptionsModal = () => {
  const { closeTasksListsOptionsModal } = useActions()
  const {
    listId,
    color,
    hidden,
    template,
    invokerRect
  } = useTypedSelector(s => s.modals.tasksListOptions)
  const theme = useTheme() as ITheme

  const options = useMemo(() => [
    hidden ? 'Show' : 'Hide',
    'Delete',
    ...Object.keys(TASKS_LIST_TITLE_COLORS),
  ], [hidden])

  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect
  } = useSelectItem(color, options)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.CENTER_BOTTOM,
    invokerRect,
  })

  useOnCloseModal(ref, closeTasksListsOptionsModal)

  useEventListener('keydown', handleKeydownSelect)

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
