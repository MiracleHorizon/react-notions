import React, { FC, memo, MouseEvent, useCallback, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useHover } from 'usehooks-ts'

import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import IPage from 'models/page/IPage'
import * as Item from './BoardItem.styles'

const BoardItem: FC<IPage> = memo(page => {
  const { _id, title, iconUrl } = page
  const { openPageOptionsModal, setStartItem } = useActions()
  const [, setSearchParams] = useSearchParams()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleDragStart = () => {
    setStartItem(page)
  }

  const handleOpenOptionsModal = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      openPageOptionsModal({ coords: setCoordsByPointer(e), page })
    },
    [page, openPageOptionsModal]
  )

  const handleOpenNotionTask = () => setSearchParams({ p: _id })

  return (
    <Item.Wrapper
      ref={ref}
      draggable
      data-item
      onClick={handleOpenNotionTask}
      onDragStart={handleDragStart}
    >
      <Item.Container>
        {iconUrl && <Item.Icon src={handleImageUrl(iconUrl)} alt='icon' />}
        <Item.Title>{title === '' ? 'Untitled' : title}</Item.Title>
      </Item.Container>
      <OptionsButton
        size='medium'
        type='outlined'
        isHovering={isHovering}
        onClickAction={handleOpenOptionsModal}
      />
    </Item.Wrapper>
  )
})

export default BoardItem
