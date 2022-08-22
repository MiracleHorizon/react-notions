import React, { FC, useRef } from 'react'
import { useSelector } from 'react-redux'

import NoStatusTasksListTitle from '../../TasksList - Checked/TopBar - Checked/Title - Checked/NoStatus - Checked'
import CountButton from 'components/ui/buttons/CountButton'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import {
  selectListDependencies,
  selectNoStatusPages,
} from 'store/slices/pages/pages.selectors'
import ITasksList from 'models/tasksList/ITasksList'
import * as Item from './HiddenTasksListItem.styles'

const HiddenTasksListItem: FC<ITasksList> = list => {
  const { _id, title, color, hidden } = list
  const { openHiddenTasksListModal } = useActions()
  const dependencies = useTypedSelector(s => selectListDependencies(s, _id))
  const noStatusTasks = useSelector(selectNoStatusPages)
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenHiddenListModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openHiddenTasksListModal({ invokerRect, list })
  }

  return (
    <Item.Container ref={ref} onClick={handleOpenHiddenListModal}>
      {color === 'empty' ? (
        <NoStatusTasksListTitle hidden={hidden} />
      ) : (
        <Item.TitleContainer color={color}>
          <Item.Title>{title}</Item.Title>
        </Item.TitleContainer>
      )}
      <CountButton
        count={color === 'empty' ? noStatusTasks.length : dependencies.length}
      />
    </Item.Container>
  )
}

export default HiddenTasksListItem
