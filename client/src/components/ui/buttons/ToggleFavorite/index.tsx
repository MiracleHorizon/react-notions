import React, { FC, useRef, useState } from 'react'

import { ToggleFavoriteTooltip } from 'components/ui/tooltips'
import { FavoriteStarSvg, UnfavoriteStarSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import IPage from 'models/page/IPage'
import Container from './ToggleFavoriteButton.styles'

// Хук useHover не используется, так как было необходимо несколько изменить ожидаемое поведение.
const ToggleFavoriteButton: FC<IPage> = ({ _id, favorite }) => {
  const [updatePage] = useUpdatePageMutation()
  const [isHovering, setHovering] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => setHovering(true)

  const handleMouseLeave = () => setHovering(false)

  const handleToggleFavorite = () => {
    setHovering(false)
    updatePage({
      _id,
      body: {
        parentPageId: null,
        parentListId: null,
        status: null,
        favorite: !favorite,
      },
    })
  }

  return (
    <Container
      ref={ref}
      role='button'
      data-btn='toggle-fav'
      onClick={handleToggleFavorite}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {favorite ? <FavoriteStarSvg /> : <UnfavoriteStarSvg />}
      {isHovering && (
        <ToggleFavoriteTooltip reference={ref} favorite={favorite} />
      )}
    </Container>
  )
}

export default ToggleFavoriteButton
