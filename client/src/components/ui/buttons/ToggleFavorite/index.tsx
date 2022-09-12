import React, { FC, memo } from 'react'
import { useNavigate } from 'react-router'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { FavoriteStarSvg, UnfavoriteStarSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { useUpdatePageMutation } from 'services/notions.api'
import { ModalPosition } from 'hooks/useSetModalPosition'
import IPage from 'models/page/IPage'
import Button from './ToggleFavoriteButton.styles'

const ToggleFavoriteButton: FC<IPage> = memo(({ _id, favorite }) => {
  const { closeNotionTaskModal } = useActions()
  const { ref, isHovering, setHovering } = useDebounceHovering()
  const [updatePage] = useUpdatePageMutation()
  const navigate = useNavigate()

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
    >
      {favorite ? <FavoriteStarSvg /> : <UnfavoriteStarSvg />}
      {isHovering && (
        <FilledTooltip
          title={`${
            favorite ? 'Remove this page from' : 'Pin this page in'
          } your favorites`}
          desc='Ctrl+Alt+Shift+F'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={ref}
          itemsCenter
        />
      )}
    </Button>
  )
})

export default ToggleFavoriteButton
