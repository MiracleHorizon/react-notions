import React, { FC, MouseEvent, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { Link } from 'react-router-dom'

import NotionPageUrlItemIcon from './Icon'
import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import * as Item from './NotionPageUrlItem.styles'

const NotionPageUrlItem: FC<INotionContentItem> = item => {
  const { pageId, content, iconUrl } = item
  const { openPageOptionsModal } = useActions()
  const page = useTypedSelector(state =>
    state.pages.pages.find(page => page._id === pageId)
  )
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenPageOptionsModal = (e: MouseEvent) => {
    e.preventDefault()

    if (!page) return
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  if (!pageId) return null

  return (
    <Link to={`/workspace/${pageId}`}>
      <Item.Wrapper ref={ref} onContextMenu={handleOpenPageOptionsModal}>
        <Item.Container>
          <NotionPageUrlItemIcon _id={pageId} iconUrl={iconUrl} />
          {isHovering && (
            <OptionsButton
              type='primary' // ! ЗАМЕНИТЬ ТИП
              size='medium'
              onClickAction={handleOpenPageOptionsModal}
            />
          )}
          <Item.Title>{content !== '' ? content : 'Untitled'}</Item.Title>
        </Item.Container>
      </Item.Wrapper>
    </Link>
  )
}

export default NotionPageUrlItem
