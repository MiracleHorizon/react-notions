import React, { FC, memo, useCallback, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import OptionsButton from 'components/ui/buttons/Options'
import { CreatePageTooltipBoard } from 'components/ui/tooltips'
import PlusButton from 'components/ui/buttons/Plus'
import useActions from 'hooks/useActions'
import PropTypes from './TasksListActionButtons.types'
import * as Bar from './TasksListActionButtons.styles'

const TasksListActionButtons: FC<PropTypes> = memo(
  ({ _id, color, hidden, isHovering, pageLocked, onClickAction }) => {
    const { openTasksListsOptionsModal } = useActions()
    const optionsButtonRef = useRef<HTMLDivElement>(null)
    const newPageButtonRef = useRef<HTMLDivElement>(null)
    const isNewPageButtonHovering = useHover(newPageButtonRef)

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
            <CreatePageTooltipBoard reference={newPageButtonRef} />
          )}
        </Bar.ButtonContainer>
      </Bar.Wrapper>
    )
  }
)

export default TasksListActionButtons
