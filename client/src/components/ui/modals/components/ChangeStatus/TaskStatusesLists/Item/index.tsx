import React, { FC, useRef, MouseEvent, useCallback, memo } from 'react'

import TasksListStatusContainer from 'components/ui/StatusContainer'
import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import PropTypes from './StatusListItem.types'
import * as Item from './StatusListItem.styles'

const StatusListItem: FC<PropTypes> =
  memo(({ list, isSelected, handleSelectItem, handleChangeTaskStatus }) => {
    const { openTasksListsOptionsModal } = useActions()
    const optionsBtnRef = useRef<HTMLDivElement>(null)
    const ref = useRef<HTMLDivElement>(null)

    const handleOpenTasksListOptionsModal = useCallback(
      (e: MouseEvent) => {
        e.stopPropagation()

        openTasksListsOptionsModal({
          invokerRect: optionsBtnRef.current?.getBoundingClientRect().toJSON(),
          template: 'taskModal',
          hidden: list.hidden,
          listId: list._id,
          color: list.color,
        })
      },
      [list, openTasksListsOptionsModal]
    )

    return (
      <Item.Wrapper
        ref={ref}
        isSelected={isSelected}
        onClick={handleChangeTaskStatus}
        onMouseEnter={() => handleSelectItem(list._id)}
      >
        <Item.Container>
          <TasksListStatusContainer {...list} />
          <Item.ButtonContainer ref={optionsBtnRef} isSelected={isSelected}>
            <OptionsButton
              size='medium'
              type='primary'
              isHovering={true}
              onClickAction={handleOpenTasksListOptionsModal}
            />
          </Item.ButtonContainer>
        </Item.Container>
      </Item.Wrapper>
    )
  })

export default StatusListItem
