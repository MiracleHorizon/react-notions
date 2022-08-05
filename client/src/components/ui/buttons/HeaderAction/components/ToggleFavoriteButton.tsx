import React, { FC } from 'react'

import { FavoriteStarSvg, UnfavoriteStarSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { IPage } from 'models/page/IPage'
import Container from '../HeaderActionButton.styles'

const ToggleFavoriteButton: FC<IPage> = ({ _id, favorite }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleToggleFavorite = () => {
    updatePage({ _id, body: { parentPageId: null, favorite: !favorite } })
  }

  return (
    <Container
      role='button'
      data-btn='toggle-fav'
      onClick={handleToggleFavorite}
    >
      {favorite ? <FavoriteStarSvg /> : <UnfavoriteStarSvg />}
    </Container>
  )
}

export default ToggleFavoriteButton
