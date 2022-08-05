import React, { FC, useRef } from 'react'
import { useSelector } from 'react-redux'

import NoStatusTasksListTitle from '../../TasksList/TopBar/Title/NoStatus'
import CountButton from 'components/ui/buttons/CountButton'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectNoStatusPages } from 'store/slices/pages/pages.selectors'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import ITasksList from 'models/tasksList/ITasksList'
import * as Item from './HiddenTasksListItem.styles'

const HiddenTasksListItem: FC<ITasksList> = list => {
  const { title, color } = list
  const { openHiddenTasksListModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const deps = useTypedSelector(state =>
    state.pages.pages.filter(page => page.parentListId === list._id)
  ) //*

  const noStatus = useSelector(selectNoStatusPages)

  const handleOpenHiddenListModal = () => {
    openHiddenTasksListModal({
      coords: modalsCoordsHandler.hiddenTasksList(ref),
      list,
    })
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
      <CountButton count={color === 'empty' ? noStatus.length : deps.length} />
    </Item.Container>
  )
}

export default HiddenTasksListItem
