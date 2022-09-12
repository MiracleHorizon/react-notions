import React, { CSSProperties, FC, memo } from 'react'
import { useImageOnLoad } from 'usehooks-ts'

import { CoverItemTooltip } from 'components/ui/tooltips'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { useUpdatePageMutation } from 'services/notions.api'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import { IDecorItem } from 'models/decor/IDecorList'
import * as Item from './GalleryItem.styles'

const GalleryItem: FC<{ pageId: string } & IDecorItem> = memo(
  ({ pageId, imgUrl, tooltipTitle, tooltipDescription }) => {
    const [updatePage] = useUpdatePageMutation()
    const { handleImageOnLoad, css } = useImageOnLoad()
    const { ref, isHovering } = useDebounceHovering(500)

    const handleSelectCover = () => {
      updatePage({ _id: pageId, body: { coverUrl: imgUrl } })
    }

    return (
      <Item.Wrapper ref={ref}>
        <Item.Container onClick={handleSelectCover}>
          <Item.Image
            style={{ ...(css.fullSize as CSSProperties) }}
            src={handleImageUrl(imgUrl)}
            onLoad={handleImageOnLoad}
            alt='cover'
          />
        </Item.Container>
        {isHovering && (
          <CoverItemTooltip
            reference={ref}
            title={tooltipTitle}
            description={tooltipDescription}
          />
        )}
      </Item.Wrapper>
    )
  }
)

export default GalleryItem
