import React, { FC, memo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

import { ToggleFavoriteTooltip } from 'components/ui/tooltips'
import { FavoriteStarSvg, UnfavoriteStarSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'services/notions.api'
import IPage from 'models/page/IPage'
import Button from './ToggleFavoriteButton.styles'

const ToggleFavoriteButton: FC<IPage> = memo(({ _id, favorite }) => {
  const { closeNotionTaskModal } = useActions()
  const [isHovering, setHovering] = useState<boolean>(false)
  const [updatePage] = useUpdatePageMutation()
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const handleMouseEnter = () => setHovering(true)

  const handleMouseLeave = () => setHovering(false)

  const handleToggleFavorite = async () => {
    const body = {
      parentPageId: null,
      parentListId: null,
      status: null,
      favorite: !favorite,
    }

    setHovering(false)
    await updatePage({ _id, body })
    navigate(`/workspace/${_id}`)
    closeNotionTaskModal()
  }

  return (
    <Button
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
    </Button>
  )
})

export default ToggleFavoriteButton
