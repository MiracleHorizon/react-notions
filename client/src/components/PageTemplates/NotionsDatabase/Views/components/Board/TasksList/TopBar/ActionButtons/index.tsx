import React, { FC, memo, useCallback, useRef } from 'react'

import OptionsButton from 'components/ui/buttons/Options'
import FilledTooltip from 'components/ui/tooltips/Filled'
import PlusButton from 'components/ui/buttons/Plus'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import PropTypes from './TasksListActionButtons.types'
import * as Bar from './TasksListActionButtons.styles'

const TasksListActionButtons: FC<PropTypes> = memo(
  ({ _id, color, hidden, isHovering, pageLocked, onClickAction }) => {
    const { openTasksListsOptionsModal } = useActions()
    const optionsButtonRef = useRef<HTMLDivElement>(null)
    const {
      ref: newPageButtonRef,
      isHovering: isNewPageButtonHovering
    } = useDebounceHovering()

    const handleOpenListOptionModal = useCallback(() => {
      const invokerRect = optionsButtonRef.current
        ?.getBoundingClientRect()
        .toJSON()
      openTasksListsOptionsModal({
        invokerRect,
        template: 'default',
        listId: _id,
        hidden,
        color,
      })
    }, [_id, color, hidden, openTasksListsOptionsModal])

    return (
      <Bar.Wrapper isHovering={isHovering}>
        <Bar.ButtonContainer ref={optionsButtonRef}>
          {!pageLocked && (
            <OptionsButton
              size='medium'
              type='primary'
              isHovering={true}
              onClickAction={handleOpenListOptionModal}
            />
          )}
        </Bar.ButtonContainer>
        <Bar.ButtonContainer ref={newPageButtonRef}>
          <PlusButton onClickAction={onClickAction} />
          {isNewPageButtonHovering && (
            <FilledTooltip
              title='Create new page'
              pos={ModalPosition.CENTER_TOP}
              invokerRef={newPageButtonRef}
            />
          )}
        </Bar.ButtonContainer>
      </Bar.Wrapper>
    )
  }
)

export default TasksListActionButtons
