import React, { FC, memo, MouseEvent, useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { Link } from 'react-router-dom'

import NotionPageUrlItemIcon from './Icon - Checked'
import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionPageUrlItem.styles'

const NotionPageUrlItem: FC<PropTypes> = memo(
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
            <NotionPageUrlItemIcon _id={pageId} iconUrl={iconUrl} />
            {isHovering && (
              <OptionsButton
                size='medium'
                type='primary'
                onClickAction={handleOpenPageOptionsModal}
              />
            )}
            <Item.Title>{content === '' ? 'Untitled' : content}</Item.Title>
          </Item.Container>
        </Item.Wrapper>
      </Link>
    )
  }
)

export default NotionPageUrlItem
