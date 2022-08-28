import React, { FC, useRef } from 'react'
import { useSelector } from 'react-redux'

import NoStatusTasksListTitle from '../../TasksList/TopBar/Title/NoStatus'
import CountButton from 'components/ui/buttons/CountButton'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import ITasksList from 'models/tasksList/ITasksList'
import * as Item from './HiddenTasksListItem.styles'

const HiddenTasksListItem: FC<ITasksList> = list => {
  const { _id, title, color, hidden } = list
  const { openHiddenTasksListModal } = useActions()
  const depsLength = useTypedSelector(s => NotionsSelector.selectListDepsLength(s, _id))
  const noStatusTasks = useSelector(NotionsSelector.selectNoStatusPages)
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenHiddenListModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openHiddenTasksListModal({ invokerRect, list })
  }

  return (
    <Item.Container ref={ref} onClick={handleOpenHiddenListModal}>
      {color === TasksListTitleColorsEnum.EMPTY ? (
        <NoStatusTasksListTitle hidden={hidden} />
      ) : (
        <Item.TitleContainer color={color}>
          <Item.Title>{title}</Item.Title>
        </Item.TitleContainer>
      )}
      <CountButton
        count={
          color === TasksListTitleColorsEnum.EMPTY
            ? noStatusTasks.length
            : depsLength
        }
      />
    </Item.Container>
  )
}

export default HiddenTasksListItem
