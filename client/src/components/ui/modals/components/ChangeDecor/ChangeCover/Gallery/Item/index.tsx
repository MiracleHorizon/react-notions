import React, { CSSProperties, FC, memo } from 'react'
import { useImageOnLoad } from 'usehooks-ts'

import { useUpdatePageMutation } from 'services/notions.api'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Item from './GalleryItem.styles'

const GalleryItem: FC<{
  _id: string
  imgUrl: string
}> = memo(({ _id, imgUrl }) => {
  const [updatePage] = useUpdatePageMutation()
  const { handleImageOnLoad, css } = useImageOnLoad()

  const handleSelectCover = () => {
    updatePage({ _id, body: { coverUrl: imgUrl } })
  }

  return (
    <Item.Wrapper>
      <Item.Container onClick={handleSelectCover}>
        <Item.Image
          style={{ ...(css.fullSize as CSSProperties) }}
          src={handleImageUrl(imgUrl)}
          onLoad={handleImageOnLoad}
          alt='Image'
        />
      </Item.Container>
    </Item.Wrapper>
  )
})

export default GalleryItem
