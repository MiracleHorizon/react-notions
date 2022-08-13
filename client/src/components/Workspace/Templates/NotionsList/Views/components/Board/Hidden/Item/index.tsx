import React, { FC, useRef } from 'react'
import { useSelector } from 'react-redux'

import NoStatusTasksListTitle from '../../TasksList/TopBar/Title/NoStatus'
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
  const { _id, title, color } = list
  const deps = useTypedSelector(state => selectListDependencies(state, _id))
  const noStatusPages = useSelector(selectNoStatusPages)
  const ref = useRef<HTMLDivElement>(null)
  const { openHiddenTasksListModal } = useActions()

  const handleOpenHiddenListModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openHiddenTasksListModal({ invokerRect, list })
  }

  return (
    <Item.Container ref={ref} onClick={handleOpenHiddenListModal}>
      {color === 'empty' ? (
        <NoStatusTasksListTitle />
      ) : (
        <Item.TitleContainer color={color}>
          <Item.Title>{title}</Item.Title>
        </Item.TitleContainer>
      )}
      <CountButton
        count={color === 'empty' ? noStatusPages.length : deps.length}
      />
    </Item.Container>
  )
}

export default HiddenTasksListItem
