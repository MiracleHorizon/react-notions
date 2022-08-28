import React, { FC, memo, MouseEvent, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { Link } from 'react-router-dom'

import OptionsButton from 'components/ui/buttons/Options'
import NotionPageLinkItemIcon from './Icon'
import useActions from 'hooks/useActions'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionPageLinkItem.styles'

const NotionPageLinkItem: FC<PropTypes> = memo(
  ({ item: { pageId, content, iconUrl }, page }) => {
    const { openPageOptionsModal } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const handleOpenPageOptionsModal = (e: MouseEvent) => {
      e.preventDefault()
      openPageOptionsModal({ coords: setCoordsByPointer(e), page })
    }

    if (!pageId) return null

    return (
      <Link to={`/workspace/${pageId}`}>
        <Item.Wrapper
          data-selectable
          ref={ref}
          onContextMenu={handleOpenPageOptionsModal}
        >
          <Item.Container>
            <NotionPageLinkItemIcon _id={pageId} iconUrl={iconUrl} />
            <OptionsButton
              size='medium'
              type='primary'
              isHovering={isHovering}
              onClickAction={handleOpenPageOptionsModal}
            />
            <Item.Title>{content === '' ? 'Untitled' : content}</Item.Title>
          </Item.Container>
        </Item.Wrapper>
      </Link>
    )
  }
)

export default NotionPageLinkItem
