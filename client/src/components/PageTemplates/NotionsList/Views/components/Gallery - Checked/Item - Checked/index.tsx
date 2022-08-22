import React, { FC, useRef, MouseEvent, useCallback, memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useHover } from 'usehooks-ts'

import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import IPage from 'models/page/IPage'
import * as Item from './GalleryItem.styles'

const GalleryItem: FC<{
  page: IPage
  primary: boolean
}> = memo(({ primary, page }) => {
  const { _id, title, iconUrl, coverUrl } = page
  const { openPageOptionsModal } = useActions()
  const [, setSearchParams] = useSearchParams()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

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
      data-el='page-view-item'
      ref={ref}
      primary={primary}
      onClick={handleOpenNotionTask}
    >
      <Item.Container>
        {coverUrl && <Item.Cover coverUrl={handleImageUrl(coverUrl)} />}
        <Item.TitleContainer>
          {iconUrl && (
            <Item.IconContainer>
              <Item.Icon src={handleImageUrl(iconUrl)} alt='icon' />
            </Item.IconContainer>
          )}
          {title === '' ? (
            <Item.Untitled>Untitled</Item.Untitled>
          ) : (
            <Item.Title>{title}</Item.Title>
          )}
        </Item.TitleContainer>
        {isHovering && (
          <OptionsButton
            size='medium'
            type='outlined'
            onClickAction={handleOpenOptionsModal}
          />
        )}
      </Item.Container>
    </Item.Wrapper>
  )
})

export default GalleryItem
