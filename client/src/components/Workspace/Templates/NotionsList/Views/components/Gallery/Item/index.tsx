import React, { FC, useRef, MouseEvent } from 'react'
import { useHover } from 'usehooks-ts'
import { Link } from 'react-router-dom'

import OptionsButton from 'components/ui/buttons/Options'
import CommentsInfo from '../../../CommentsInfo'
import useActions from 'hooks/useActions'
import { setCoordsByPointer } from 'helpers/setCoordsByPointer'
import PropTypes from './GalleryItem.types'
import * as Item from './GalleryItem.styles'

const GalleryItem: FC<PropTypes> = ({ primary, page }) => {
  const { title, iconUrl, coverUrl } = page
  const { openPageOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenOptionsModal = (e: MouseEvent) => {
    e.preventDefault()
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  return (
    // <Link to={`workspace/текущая страница/${page._id}`}>
    <Item.Wrapper ref={ref} primary={primary} data-el='page-view-item'>
      <Item.Container>
        {coverUrl && <Item.Cover coverUrl={coverUrl} />}
        <Item.TitleContainer>
          {iconUrl && (
            <Item.IconContainer>
              <Item.Icon src={iconUrl} />
            </Item.IconContainer>
          )}
          {title === '' ? (
            <Item.Untitled>Untitled</Item.Untitled>
          ) : (
            <Item.Title>{title}</Item.Title>
          )}
        </Item.TitleContainer>
        {page.comments.length > 0 && (
          <CommentsInfo count={page.comments.length} padding />
        )}
        {isHovering && (
          <OptionsButton
            size='medium'
            type='outlined'
            onClickAction={handleOpenOptionsModal}
          />
        )}
      </Item.Container>
    </Item.Wrapper>
    // </Link>
  )
}

export default GalleryItem
